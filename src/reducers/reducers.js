import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import appStateReducer from './appState/appState';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    appState: appStateReducer,
    form: formReducer,
    router: routerReducer,
});

export default rootReducer;
