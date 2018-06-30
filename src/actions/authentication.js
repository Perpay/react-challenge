import {
    LOGIN_REQUEST,
    LOGIN_REFRESH,
    LOGIN_FAILED,
    TOKEN_UNAUTHENTICATED,
    TOKEN_REQUEST,
    TOKEN_RECEIVED,
    TOKEN_FAILED,
} from 'constants/actionTypes';

export function requestLogin(credentials) {
    return {
        type: LOGIN_REQUEST,
        payload: credentials
    };
};

export function refreshLogin(payload) {
    return {
        type: LOGIN_REFRESH,
        payload: payload
    };
};

export function loginFailed(payload) {
    return {
        type: LOGIN_FAILED,
        payload: payload
    };
};

export function unauthenticateToken(payload) {
    return {
        type: TOKEN_UNAUTHENTICATED,
        payload: payload
    };
};

export function requestToken() {
    return {
        type: TOKEN_REQUEST,
        payload: null
    };
};

export function receiveToken(payload) {
    return {
        type: TOKEN_RECEIVED,
        payload: payload
    };
};

export function failToken() {
    return {
        type: TOKEN_FAILED,
        payload: null
    };
};
