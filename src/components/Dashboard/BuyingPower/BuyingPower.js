import React, { Component, componentDidMount } from 'react';
import styles from './BuyingPower.scss';

class BuyingPower extends Component {
    componentDidMount() {
        this.props.onComponentLoad();
    }

    render() {
        return (
            <div className={styles.buyingPowerContainer}>
                <div className={styles.buyingPowerWrapper}>
                    <div className={styles.totalBuyingPower}>
                        <div className={styles.totalText}>${this.props.financial.purchasing_power}</div>
                        <div className={styles.totalLabel}>Buying Power</div>
                    </div>
                    <div className={styles.buyingPowerSummary}>
                        <ul>
                            <li>${this.props.financial.available_credit} Available Spending</li>
                            <li>${this.props.financial.cash_balance} Cash Balance</li>
                            <li>${this.props.financial.credits.highest_potential} Credit</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyingPower;
