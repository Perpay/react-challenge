import React, { Component, componentDidMount } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';
import styles from './Account.scss';

class Account extends Component {
    componentDidMount() {
        this.props.onComponentLoad();
    }

    passedProps(Component) {
        return (() => {
            switch (Component.name) {
                case 'Dashboard':
                    return (
                        <Component
                        summary={this.props.summary}
                        openOutstandingModal={this.props.openOutstandingModal}
                        />
                    );
                default:
                    return <Component summary={this.props.summary} />;
                }
        });
    }

    render() {
        return (
            <div className={styles.accountContainer}>
                <div className={styles.contentContainer}>
                    <Route exact path="/accounts" render={this.passedProps(Dashboard)} />
                    <Route path="/accounts/dashboard" render={this.passedProps(Dashboard)} />
                </div>
            </div>
        );
    }
};

export default Account;
