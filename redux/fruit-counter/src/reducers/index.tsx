import { StoreState } from '../types';
import { CountAction } from '../actions';
import { DECREMENT_COUNT, INCREMENT_COUNT } from '../constants';

export function count(state: StoreState, action: CountAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {...state, count: state.count + 1};
    case DECREMENT_COUNT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}