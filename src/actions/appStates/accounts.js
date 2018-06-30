import {
    ACCOUNT_SUMMARY_REQUEST,
    ACCOUNT_SUMMARY_REFRESH,
    ACCOUNT_FINANCIAL_REQUEST,
    ACCOUNT_FINANCIAL_REFRESH,
    ACCOUNT_TRANSACTIONS_REQUEST,
    ACCOUNT_TRANSACTIONS_REFRESH
} from 'constants/actionTypes';

export function requestSummary() {
    return {
        type: ACCOUNT_SUMMARY_REQUEST,
        payload: null
    }
};

export function refreshSummary(payload) {
    return {
        type: ACCOUNT_SUMMARY_REFRESH,
        payload: payload
    }
};

export function requestTransactions() {
    return {
        type: ACCOUNT_TRANSACTIONS_REQUEST,
        payload: null
    }
};

export function refreshTransactions(payload) {
    return {
        type: ACCOUNT_TRANSACTIONS_REFRESH,
        payload: payload
    }
};

export function requestFinancial() {
    return {
        type: ACCOUNT_FINANCIAL_REQUEST,
        payload: null
    }
};

export function refreshFinancial(payload) {
    return {
        type: ACCOUNT_FINANCIAL_REFRESH,
        payload: payload
    }
};
