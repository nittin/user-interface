/*
 *
 * ListBooks reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  loading: false,
  error: null,
  searchKey: null,
  listCategory: null,
  listAuthor: null,
  listPublisher: null,
  listBook: null,
  categoryFilter: null,
  publisherFilter: null,
  authorFilter: null,
  sortType: 'asc',
  sortField: 'id',
  page: 0,
});

function listBooksReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHANGE_SORT:
      return state
        .set('sortType', action.sortType)
        .set('sortField', action.sortField);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    case constants.CHANGE_SEARCH_KEY:
      return state.set('searchKey', action.searchKey);
    case constants.GET_ALL_CATEGORY:
      return state
        .set('loading', { ...state.get('loading'), category: true })
        .set('listCategory', null);
    case constants.GET_ALL_CATEGORY_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), category: false })
        .set('listCategory', action.data);
    case constants.GET_ALL_AUTHOR:
      return state
        .set('loading', { ...state.get('loading'), author: true })
        .set('listAuthor', null);
    case constants.GET_ALL_AUTHOR_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), author: false })
        .set('listAuthor', action.data);
    case constants.GET_ALL_PUBLISHER:
      return state
        .set('loading', { ...state.get('loading'), publisher: true })
        .set('listPublisher', null);
    case constants.GET_ALL_PUBLISHER_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), publisher: false })
        .set('listPublisher', action.data);
    case constants.GET_BOOK_BY_NAME:
    case constants.GET_BOOK_BY_AUTHOR:
    case constants.GET_BOOK_BY_CATEGORY:
    case constants.GET_BOOK_BY_PUBLISHER:
      return state
        .set('loading', { ...state.get('loading'), table: true })
        .set('listBook', null);
    case constants.GET_BOOK_BY_NAME_SUCCESS:
    case constants.GET_BOOK_BY_AUTHOR_SUCCESS:
    case constants.GET_BOOK_BY_CATEGORY_SUCCESS:
    case constants.GET_BOOK_BY_PUBLISHER_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), table: false })
        .set('listBook', action.data);
    default:
      return state;
  }
}

export default listBooksReducer;
