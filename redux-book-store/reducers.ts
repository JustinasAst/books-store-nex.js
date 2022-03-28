import { postTypes } from './actionTypes';

import { BooksState, PostActions } from './types';

const initialState: BooksState = {
  pending: false,
  books: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: PostActions) => {
  switch (action.type) {
    case postTypes.FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        error: null,
      };
    case postTypes.FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        books: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
