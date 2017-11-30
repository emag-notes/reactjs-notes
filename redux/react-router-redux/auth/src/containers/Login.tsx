import { connect, Dispatch } from 'react-redux';
import Login from '../components/Login';
import { push } from 'react-router-redux';
import { authSuccess } from '../actions/index';

const mapDispatchToProps = (dispatch: Dispatch<() => void>) => ({
  login: () => {
    dispatch(authSuccess());
    dispatch(push('/'));
  }
});

export default connect(null, mapDispatchToProps)(Login);