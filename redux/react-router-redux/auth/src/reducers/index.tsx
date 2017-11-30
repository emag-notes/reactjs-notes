import { AuthAction } from '../actions';
import { AUTH_FAIL, AUTH_SUCCESS } from '../actions/types';

interface State {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

const authReducer = (state: State = initialState, action: AuthAction): State => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };

    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default authReducer;