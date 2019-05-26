/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  listCategory: null,
  listAuthor: null,
  listPublisher: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // getAll Init
    case constants.GET_ALL_CATEGORY:
      return state.set('loading', { ...state.get('loading'), category: true });
    case constants.GET_ALL_CATEGORY_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), category: false })
        .set('listCategory', action.data);
    case constants.GET_ALL_AUTHOR:
      return state.set('loading', { ...state.get('loading'), author: true });
    case constants.GET_ALL_AUTHOR_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), author: false })
        .set('listAuthor', action.data);
    case constants.GET_ALL_PUBLISHER:
      return state.set('loading', { ...state.get('loading'), publisher: true });
    case constants.GET_ALL_PUBLISHER_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), publisher: false })
        .set('listPublisher', action.data);
    default:
      return state;
  }
}

export default appReducer;
