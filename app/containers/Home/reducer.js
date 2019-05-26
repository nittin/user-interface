/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  newBook: null,
  listNovel: null,
  listNewPublished: null,
  listCurriculum: null,
  listLiterary: null,
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
    case constants.GET_LIST_CURRICULUM:
      return state.set('loading', { ...state.get('loading'), curriculum: true });
    case constants.GET_LIST_CURRICULUM_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), curriculum: false })
        .set('listCurriculum', action.data);
    case constants.GET_LIST_NOVEL:
      return state.set('loading', { ...state.get('loading'), novel: true });
    case constants.GET_LIST_NOVEL_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), novel: false })
        .set('listNovel', action.data);
    case constants.GET_LIST_NEW_PUBLISHED:
      return state.set('loading', { ...state.get('loading'), newPublished: true });
    case constants.GET_LIST_NEW_PUBLISHED_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), newPublished: false })
        .set('listNewPublished', action.data);
    case constants.GET_LIST_LITERARY:
      return state.set('loading', { ...state.get('loading'), literary: true });
    case constants.GET_LIST_LITERARY_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), newBook: false })
        .set('listLiterary', action.data);
    default:
      return state;
  }
}

export default homeReducer;
