import React, { Component, componentWillReceiveProps } from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { email, required } from 'validations/fieldValidations';
import CustomInput from 'components/CustomInput/CustomInput';
import styles from './Login.scss';

class Login extends Component {
    render() {
        return(
            <div className={styles.loginContainer}>
                {this.props.isAuthenticated ? <Redirect to="/accounts" /> : "" }
                <div className={styles.loginContentWrapper}>
                    <div className={styles.loginApplication}>
                        <h1>Login</h1>
                        <form
                            className={styles.formContainer}
                            onSubmit={this.props.handleSubmit(this.props.loginHandler)}
                        >
                            <Field
                                name="email"
                                type="email"
                                component={CustomInput}
                                label="EMAIL"
                                validate={[
                                email,
                                required
                                ]}
                            />
                            <Field
                                name="password"
                                type="password"
                                component={CustomInput}
                                label="PASSWORD"
                                validate={[required]}
                            />
                            <button value="submit" className={styles.submitForm}>LOGIN</button>
                        </form>
                        <div className={styles.forgotContainer}>Forgot Password?</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default reduxForm({
    form: 'Login'
})(Login);
