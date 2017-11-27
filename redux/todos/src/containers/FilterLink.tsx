import { connect, Dispatch } from 'react-redux';
import { setVisibilityFilter, SetVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface State {
  visibilityFilter: string;
}

interface Props {
  filter: string;
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<SetVisibilityFilter>, ownProps: Props) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);