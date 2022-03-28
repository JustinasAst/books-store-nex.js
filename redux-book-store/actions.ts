import { postTypes } from './actionTypes';
import {
  FetchBooksSuccessPayload,
  FetchBooksFailurePayload,
  FetchBooksRequest,
  FetchBooksSuccess,
  FetchBooksFailure,
} from './types';

export const fetchBooksRequest = (): FetchBooksRequest => ({
  type: postTypes.FETCH_TODO_REQUEST,
});

export const fetchBooksSuccess = (
  payload: FetchBooksSuccessPayload
): FetchBooksSuccess => ({
  type: postTypes.FETCH_TODO_SUCCESS,
  payload,
});

export const fetchBooksFailure = (
  payload: FetchBooksFailurePayload
): FetchBooksFailure => ({
  type: postTypes.FETCH_TODO_FAILURE,
  payload,
});
