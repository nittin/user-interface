/*
 *
 * Detail actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}
export function setBookId(id) {
  return {
    type: constants.SET_BOOK_ID,
    id,
  };
}
export function getBookById() {
  return {
    type: constants.GET_BOOK_BY_ID,
  };
}
export function getBookByIdSuccess(data) {
  return {
    type: constants.GET_BOOK_BY_ID_SUCCESS,
    data,
  };
}
export function apiLoadFail(err) {
  return {
    type: constants.API_LOAD_FAIL,
    err,
  };
}
