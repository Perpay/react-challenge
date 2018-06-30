import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
    ACCOUNT_SUMMARY_REQUEST,
    ACCOUNT_FINANCIAL_REQUEST,
    ACCOUNT_TRANSACTIONS_REQUEST
} from 'constants/actionTypes';
import {
    refreshSummary,
    refreshFinancial,
    refreshTransactions
} from 'actions/appStates/accounts';
import {
    CREDIT_SUMMARIES_ENDPOINT,
    POWER_BREAKDOWNS_ENDPOINT,
    TRANSACTIONS_ENDPOINT,
} from 'constants/urls';

export function getSummary($action, store, { get }) {
    return $action.ofType(ACCOUNT_SUMMARY_REQUEST)
        .mergeMap(action => {
            return get(CREDIT_SUMMARIES_ENDPOINT)
                .map(results => {
                    if (results.status) {
                        return refreshSummary(results.response);
                    }
                    return results;
                });
        });
};


export function getTransactions($action, store, { get }) {
    return $action.ofType(ACCOUNT_TRANSACTIONS_REQUEST)
        .mergeMap(action => {
            return get(TRANSACTIONS_ENDPOINT)
                .map(results => {
                    if (results.status) {
                        return refreshTransactions(results.response);
                    }
                    return results;
                });
        });
};

export function getFinancial($action, store, { get }) {
    return $action.ofType(ACCOUNT_FINANCIAL_REQUEST)
        .mergeMap(action => {
            return get(POWER_BREAKDOWNS_ENDPOINT)
                .map(results => {
                    if (results.status) {
                        return refreshFinancial(results.response);
                    }
                    return results;
                });
        });
};
