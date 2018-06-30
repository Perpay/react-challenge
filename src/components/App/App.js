import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import VisibleLogin from 'containers/Login/VisibleLogin';
import VisibleAccount from 'containers/Account/VisibleAccount';
import styles from './App.scss';

class App extends Component {
    renderComponent(Component) {
        return (() => {
            return this.props.isAuthenticated ?
                (<Component />) : (<Redirect to="/login" />);
    })
  }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div>
                    <Header isAuthenticated={this.props.isAuthenticated} first_name={this.props.first_name}/>
                    <Switch location={location}>
                        <Route exact path="/" component={VisibleLogin} />
                        <Route path="/accounts" render={this.renderComponent(VisibleAccount)} />
                        <Route path="/login" component={VisibleLogin} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
};

export default App;
