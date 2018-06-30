import { connect } from 'react-redux';
import { requestLogin } from 'actions/authentication';
import Login from 'components/Login/Login';
import { isAuthenticated } from 'utils/tokenUtils';

const mapStateToProps = (state) => {
      return { isAuthenticated: isAuthenticated(state.authentication) };
};

const mapDispatchToProps = (dispatch) => {
      return { loginHandler: (credentials) => dispatch(requestLogin(credentials)) };
};

const VisibleLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default VisibleLogin;
