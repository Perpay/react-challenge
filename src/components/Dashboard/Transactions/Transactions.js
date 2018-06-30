import React, { Component, componentDidMount } from 'react';
import styles from './Transactions.scss';

class Transactions extends Component {
    componentDidMount() {
        this.props.onComponentLoad();
    }

    render() {
        return (
            <div className={styles.transactionsContainer}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.dateColumn}>Date</th>
                            <th className={styles.summaryColumn}>Summary</th>
                            <th className={styles.amountColumn}>Amount</th>
                            <th className={styles.balanceColumn}>Balance</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
};

export default Transactions;
