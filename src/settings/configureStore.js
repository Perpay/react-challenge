import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { get, post, put } from 'utils/requestHandlers';

import rootReducer from 'reducers/reducers';
import rootEpic from 'epics/epics';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
        get: get,
        post: post,
        put: put,
    }
});

export default function configureStore(preloadedState = {}) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(epicMiddleware, historyMiddleware),
    );
}
