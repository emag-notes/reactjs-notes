import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';

interface StoreState {
  authReducer: {
    isAuthenticated: boolean
  };
}

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);