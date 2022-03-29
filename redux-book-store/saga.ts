import axios, { AxiosResponse } from 'axios';

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { IBooks } from './types';

import { fetchBooksFailure, fetchBooksSuccess } from './actions';

import { postTypes } from './actionTypes';

const getBooks = () => axios.get<IBooks[]>('http://localhost:8000/books');

function* fetchBooksSaga() {
  try {
    const resposne: AxiosResponse<IBooks[]> = yield call(getBooks);
    yield put(
      fetchBooksSuccess({
        books: resposne.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchBooksFailure({
        error: e.message,
      })
    );
  }
}

function* booksSaga() {
  yield all([takeLatest(postTypes.FETCH_TODO_REQUEST, fetchBooksSaga)]);
}

export default booksSaga;
