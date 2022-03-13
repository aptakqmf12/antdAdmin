import { LOGIN } from './../reducer/user';
import { put, all, takeEvery } from 'redux-saga/effects';
import { ReducerActionType } from '../reducer/user';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* login(action: ReducerActionType): Generator {
  try {
    yield put({ type: LOGIN });
    yield delay(1000);
    yield alert('로그인되었습니다');
  } catch (e) {
    console.log(e);
    yield alert('login fail !!!');
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN, login);
}

export function* userSaga() {
  yield all([watchLogin]);
}
