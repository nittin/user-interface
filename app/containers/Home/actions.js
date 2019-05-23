/*
 *
 * Home actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}
export function getNewBook() {
  return {
    type: constants.GET_NEW_BOOK,
  };
}
export function getNewBookSuccess(data) {
  return {
    type: constants.GET_NEW_BOOK_SUCCESS,
    data,
  };
}
