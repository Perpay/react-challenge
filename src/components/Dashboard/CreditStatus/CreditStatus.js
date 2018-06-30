import React, { Component } from 'react';
import styles from './CreditStatus.scss';

class CreditStatus extends Component {
    render() {
        return (
            <div className={styles.creditStatusContainer}>
                <div className={styles.creditStatusWrapper}>
                    <div className={styles.creditStatusResult}>
                        {(this.props.summary || {}).borrower_status}
                    </div>
                    <div className={styles.creditStatusTitle}>CREDIT STATUS</div>
                </div>
            </div>
        );
    }
};

export default CreditStatus;
