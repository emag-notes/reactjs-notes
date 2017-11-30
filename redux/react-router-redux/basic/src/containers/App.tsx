import { connect } from 'react-redux';
import App from '../conponents/App';

interface StoreState {
  location: any;
}

const mapStateToProps = (state: StoreState) => ({
  location: state.location
});

export default connect(mapStateToProps)(App);
