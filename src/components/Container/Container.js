import React, { Component } from 'react';
import styles from './Container.scss';

class Container extends Component {
    handleClassName() {
        let className = styles.containerContainer;
        className += ` ${this.props.className || ''}`;
        className += ` ${(this.props.withPadding ? styles.withPadding : '')}`;
        return className;
    }

    render() {
        return (
            <div className={this.handleClassName()}>
                <div className={styles.headerContainer}>
                    {this.props.header}
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default Container;
