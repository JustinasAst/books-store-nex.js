import { postTypes } from './actionTypes';

export interface IBooks {
  popular: boolean;
  userId: number;
  id: number;
  title: string;
  name: string;
  surname: string;
  body: string;
  img: string;
}

export interface BooksState {
  pending: boolean;
  books: IBooks[];
  error: string | null;
}

export interface FetchBooksSuccessPayload {
  books: IBooks[];
}

export interface FetchBooksFailurePayload {
  error: string;
}

export interface FetchBooksRequest {
  type: typeof postTypes.FETCH_TODO_REQUEST;
}

export type FetchBooksSuccess = {
  type: typeof postTypes.FETCH_TODO_SUCCESS;
  payload: FetchBooksSuccessPayload;
};

export type FetchBooksFailure = {
  type: typeof postTypes.FETCH_TODO_FAILURE;
  payload: FetchBooksFailurePayload;
};

export type PostActions =
  | FetchBooksRequest
  | FetchBooksSuccess
  | FetchBooksFailure;
