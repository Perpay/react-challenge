import {
    ACCOUNT_SUMMARY_REFRESH,
    ACCOUNT_FINANCIAL_REFRESH,
    ACCOUNT_TRANSACTIONS_REFRESH
} from 'constants/actionTypes';

const initialState = {
    creditStatus: null,
    outstanding: [],
    financial: {
        credit_limit: null,
        available_credit: null,
        cash_balance: null,
        credits: {},
        purchasing_power: null
    },
    transactions: []
};

const summaryReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case ACCOUNT_SUMMARY_REFRESH:
        case ACCOUNT_TRANSACTIONS_REFRESH:
            return Object.assign({}, state, payload);
        case ACCOUNT_FINANCIAL_REFRESH:
            return Object.assign({}, state, { financial: payload });
        default: return state;
    }
};

export default summaryReducer;
