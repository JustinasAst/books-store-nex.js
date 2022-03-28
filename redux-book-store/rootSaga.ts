import { all, fork } from 'redux-saga/effects';

import booksSaga from './saga';

export function* rootSaga() {
  yield all([fork(booksSaga)]);
}
