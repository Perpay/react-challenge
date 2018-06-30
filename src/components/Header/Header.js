import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to="/accounts">
                        <div className={styles.logo}></div>
                    </Link>
                </div>
                <div className={styles.actionContainer}>
                    {
                        this.props.isAuthenticated ?
                            <div className={styles.actionContent}>
                                Welcome Perpay Guest!
                            </div> : <div className={styles.actionContent}></div>
                    }
                </div>
            </div>
        )
    }
};

export default Header;
