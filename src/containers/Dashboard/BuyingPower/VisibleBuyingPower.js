import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFinancial } from 'actions/appStates/accounts';
import BuyingPower from 'components/Dashboard/BuyingPower/BuyingPower';

const mapStateToProps = (state) => {
    return { financial: state.appState.summary.financial }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentLoad: () => dispatch(requestFinancial())
    }
};

const VisibleBuyingPower = connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyingPower);

export default VisibleBuyingPower;
