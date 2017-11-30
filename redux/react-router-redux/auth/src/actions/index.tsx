import { AUTH_FAIL, AUTH_SUCCESS } from './types';

export interface AuthSuccessAction {
  type: AUTH_SUCCESS;
}

export interface AuthFailAction {
  type: AUTH_FAIL;
}

export type AuthAction = AuthSuccessAction | AuthFailAction;

export const authSuccess = (): AuthSuccessAction => ({
  type: AUTH_SUCCESS
});

export const authFail = (): AuthFailAction => ({
  type: AUTH_FAIL
});
