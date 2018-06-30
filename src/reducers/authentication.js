import {
    LOGIN_REQUEST,
    LOGIN_REFRESH,
    LOGOUT_REQUEST,
    TOKEN_UNAUTHENTICATED,
    TOKEN_REQUEST,
    TOKEN_RECEIVED,
    TOKEN_FAILED,
} from 'constants/actionTypes';
import jwtDecode from 'jwt-decode'
import {
    retrieveToken,
    storeToken,
    removeToken,
    decodeTokens,
} from 'utils/tokenUtils';

const cleanState = {
    access: undefined,
    refresh: undefined,
};

const initialState = Object.assign({}, cleanState, retrieveToken());

const authenticationReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_REFRESH:
        case TOKEN_RECEIVED:
            const decodedTokens = decodeTokens(payload);
            storeToken(decodedTokens);
            return Object.assign({}, state, decodedTokens);
        case LOGOUT_REQUEST:
            removeToken();
            return Object.assign({}, initialState, cleanState);
        default: return state;
    }
};

export default authenticationReducer;
