import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from 'components/App/App';
import { isAuthenticated } from 'utils/tokenUtils';

function mapStateToProps(state) {
    const token = state.authentication.access;
    return {
        isAuthenticated: isAuthenticated(state.authentication),
        selected: state.router.location
    };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
