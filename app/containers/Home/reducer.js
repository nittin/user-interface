/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  newBook: null,
  loading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DEFAULT_ACTION:
      return state;
    case constants.GET_NEW_BOOK:
      return state.set('loading', { ...state.get('loading'), newBook: true });
    case constants.GET_NEW_BOOK_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), newBook: false })
        .set('newBook', action.data);
    default:
      return state;
  }
}

export default homeReducer;
