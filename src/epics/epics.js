import { combineEpics } from 'redux-observable';
import { login } from './apis/authentication';

import {
    getSummary,
    getTransactions,
    getFinancial,
} from './apis/summary';

const rootEpic = combineEpics(
    login,
    getSummary,
    getTransactions,
    getFinancial,
);

export default rootEpic;
