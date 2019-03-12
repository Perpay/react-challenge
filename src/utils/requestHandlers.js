import { ajax } from 'rxjs/observable/dom/ajax';
import {
    AUTH_ENDPOINT,
    USERS_SIGNUP_ENDPOINT,
    REFRESH_ENDPOINT,
} from 'constants/urls';
import { push } from 'react-router-redux';
import { Observable } from 'rxjs';
import {
    retrieveToken,
    storeToken,
    decodeTokens,
    isAccessTokenExpired,
    isRefreshTokenExpired,
} from 'utils/tokenUtils';

export const get = (url) => {
    return customAjax('GET', url);
}

export const post = (url, payload) => {
    return customAjax('POST', url, payload);
}

export const put = (url, payload) => {
    return customAjax('PUT', url, payload);
}

export const customAjax = (method, url, body) => {
    const whitelistUrls = [
        AUTH_ENDPOINT,
        USERS_SIGNUP_ENDPOINT,
    ]
    let headers = { 'Content-Type': 'application/json' }
    let tokens = undefined;

    if (whitelistUrls.includes(url)) {
        return ajax({url, headers, method, body});
    } else if (tokens = retrieveToken()) {
        headers = Object.assign({}, headers, {
            'Authorization': `Bearer ${tokens.access.token}`
        });

        const intendedCall = (newTokens) => {
            if (newTokens) {
                headers = Object.assign({}, headers, {
                    'Authorization': `Bearer ${newTokens.access.token}`
                });
            }

            return ajax({url, headers, method, body}).catch(response => {
                if (response.status === 401) {
                    return [push('/login')];
                } else {
                    return Observable.throw(new Error(response));
                }
            });
        };

        if (isAccessTokenExpired(tokens)) {
            if (isRefreshTokenExpired(tokens)) {
                return [push('/login')];
            } else {
                const refreshHeaders = Object.assign({}, headers, {
                    'Authorization': `Bearer ${tokens.refresh.token}`
                });

                return ajax({
                    method: 'POST',
                    url: REFRESH_ENDPOINT,
                    headers: refreshHeaders,
                }).flatMap(results => {
                    const newTokens = Object.assign({}, tokens, decodeTokens(results.response));
                    storeToken(newTokens);
                    return intendedCall(newTokens);
                });
            }
        } else {
            return intendedCall();
        }
    } else {
        return [push('/login')];
    }
}
