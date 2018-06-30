import React, { Component } from 'react';
import Container from 'components/Container/Container';
import CreditStatus from 'components/Dashboard/CreditStatus/CreditStatus';
import VisibleBuyingPower from 'containers/Dashboard/BuyingPower/VisibleBuyingPower';
import VisibleTransactions from 'containers/Dashboard/Transactions/VisibleTransactions';
import styles from './Dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardRow}>
                    <Container
                        className={styles.dashboardContainer}
                        withPadding={true}
                    >
                        <CreditStatus summary={this.props.summary} />
                    </Container>
                    <Container
                        className={styles.dashboardContainer}
                        withPadding={true}
                    >
                        <VisibleBuyingPower />
                    </Container>
                </div>
                <Container className={styles.transactionsContainer} withPadding={true}>
                    <div className={styles.transactionsTitle}>TRANSACTION HISTORY</div>
                    <VisibleTransactions />
                </Container>
            </div>
        );
    }
};

export default Dashboard;
