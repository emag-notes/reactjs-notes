import { connect, Dispatch } from 'react-redux';
import { authFail } from '../actions/index';
import { push } from 'react-router-redux';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch: Dispatch<() => void>) => ({
  logout: () => {
    dispatch(authFail());
    dispatch(push('/login'));
  }
});

export default connect(null, mapDispatchToProps)(Home);