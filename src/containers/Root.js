import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from 'settings/configureStore';
import { ConnectedRouter } from 'react-router-redux';

import AppContainer from './AppContainer/AppContainer';

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <AppContainer />
                </ConnectedRouter>
            </Provider>
        );
    }
};

export default Root;
