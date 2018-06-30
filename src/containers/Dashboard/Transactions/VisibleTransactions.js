import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestTransactions } from 'actions/appStates/accounts';
import Transactions from 'components/Dashboard/Transactions/Transactions';

const mapStateToProps = (state) => {
    return { transactions: state.appState.summary.transactions }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentLoad: () => dispatch(requestTransactions())
    }
};

const VisibleTransactions = connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);

export default VisibleTransactions;
