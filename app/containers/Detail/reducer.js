/*
 *
 * Detail reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  bookDetail: null,
  loading: false,
  error: null,
  bookId: null,
});

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DEFAULT_ACTION:
      return state;
    case constants.SET_BOOK_ID:
      return state.set('bookId', action.id);
    case constants.GET_BOOK_BY_ID:
      return state.set('loading', true).set('bookDetail', null);
    case constants.GET_BOOK_BY_ID_SUCCESS:
      return state.set('loading', false).set('bookDetail', action.data);
    case constants.API_LOAD_FAIL:
      return state.set('error', action.err);
    default:
      return state;
  }
}

export default detailReducer;
