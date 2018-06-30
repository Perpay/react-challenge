import { combineReducers } from 'redux';
import summaryReducer from './summary';

const appStateReducer = combineReducers({
    summary: summaryReducer,
});

export default appStateReducer;
