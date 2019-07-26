const TOKEN_KEY = 'perpay.test.token';
import jwtDecode from 'jwt-decode';

export function retrieveToken() {
    if (window.localStorage && window.localStorage[TOKEN_KEY]) {
        return JSON.parse(window.localStorage[TOKEN_KEY]) || undefined;
    }
}

export function storeToken(tokens) {
    if (window.localStorage) {
        window.localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
    }
}

export function removeToken() {
    if (window.localStorage) { window.localStorage.removeItem(TOKEN_KEY) }
}

export function decodeTokens(tokens) {
    let tokenDict = {};
    if (tokens.access) {
        tokenDict = Object.assign({}, tokenDict, {
            access: {
                token: tokens.access,
                payload: jwtDecode(tokens.access)
            }
        });
    }
    if (tokens.refresh) {
        tokenDict = Object.assign({}, tokenDict, {
            refresh: {
                token: tokens.refresh,
                payload: jwtDecode(tokens.refresh)
            }
        });
    }
    return tokenDict;
}

export function isAccessTokenExpired(state) {
    if (state.access && state.access.payload.exp) {
        return 1000 * state.access.payload.exp - (new Date()).getTime() < 5000;
    }
    return true;
}

export function isRefreshTokenExpired(state) {
    if (state.refresh && state.refresh.payload.exp) {
        return 1000 * state.refresh.payload.exp - (new Date()).getTime() < 5000;
    }
    return true;
}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state);
}
