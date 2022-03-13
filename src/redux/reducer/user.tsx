import { Reducer } from 'redux';

export type ReducerActionType = ReturnType<typeof requestLogin>;

const USER_STATE = {
  isAuth: false,
};

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESE = 'LOGIN_SUCCESE';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const requestLogin = () => {
  return {
    type: LOGIN,
  };
};

export const userReducer: Reducer = (
  state = USER_STATE,
  action: ReducerActionType
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };

    default:
      return state;
  }
};
