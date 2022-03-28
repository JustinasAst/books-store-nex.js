import { combineReducers } from 'redux';
import booksReducers from '../reducers';

const rootReducers = combineReducers({
  books: booksReducers,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
