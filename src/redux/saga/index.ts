import { all } from 'redux-saga/effects';
import { userSaga } from './user';

export function* rootSaga() {
  yield all([userSaga]);
}
