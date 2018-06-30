import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode'
import { push } from 'react-router-redux';
import {
    refreshLogin,
    refreshSignup,
    receiveToken,
} from 'actions/authentication';
import { refreshLogout } from 'actions/authentication';
import { USERS_SIGNUP_ENDPOINT, AUTH_ENDPOINT } from 'constants/urls';
import {
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
} from 'constants/actionTypes';


export function login(action$, store, { post }) {
    return action$.ofType(LOGIN_REQUEST)
        .flatMap(action => {
            return post(AUTH_ENDPOINT, action.payload)
                .flatMap(results => {
                    return [refreshLogin(results.response)];
                })
        });
};
