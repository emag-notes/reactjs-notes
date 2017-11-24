import * as constants from '../constants';

export interface IncrementCount {
  type: constants.INCREMENT_COUNT;
}

export interface DecrementCount {
  type: constants.DECREMENT_COUNT;
}

export type CountAction = IncrementCount | DecrementCount;

export function incrementCount(): IncrementCount {
  return {
    type: constants.INCREMENT_COUNT
  };
}

export function decrementCount(): DecrementCount {
  return {
    type: constants.DECREMENT_COUNT
  };
}
