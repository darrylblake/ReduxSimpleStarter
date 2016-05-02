import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
// was adding the reducer....
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
