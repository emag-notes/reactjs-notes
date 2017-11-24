import Counter from '../components/Counter';
import * as actions from '../actions';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({name, price, count}: StoreState) {
  return {
    name,
    price,
    count
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CountAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementCount()),
    onDecrement: () => dispatch(actions.decrementCount())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);