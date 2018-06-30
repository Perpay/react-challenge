import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestLogout } from 'actions/authentication';
import { requestSummary } from 'actions/appStates/accounts';
import Account from 'components/Account/Account';

const mapStateToProps = (state) => {
    return {
        selectedLink: state.router.location.pathname,
        summary: state.appState.summary,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentLoad: () => dispatch(requestSummary()),
    };
};

const VisibleAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);

export default VisibleAccount;
