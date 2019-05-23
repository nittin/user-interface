/*
 *
 * ListBooks actions
 *
 */

import * as constant from './constants';

export function defaultAction() {
  return {
    type: constant.DEFAULT_ACTION,
  };
}
export function onChangeFilter(name, filter) {
  return {
    type: constant.ON_CHANGE_FILTER,
    name,
    filter,
  };
}
export function onChangeSort(sortType, sortField) {
  return {
    type: constant.CHANGE_SORT,
    sortType,
    sortField,
  };
}
export function onChangePage(page) {
  return {
    type: constant.CHANGE_PAGE,
    page,
  };
}
export function getAllCategory() {
  return {
    type: constant.GET_ALL_CATEGORY,
  };
}
export function getAllCategorySuccess(data) {
  return {
    type: constant.GET_ALL_CATEGORY_SUCCESS,
    data,
  };
}
export function getAllAuthor() {
  return {
    type: constant.GET_ALL_AUTHOR,
  };
}
export function getAllAuthorSuccess(data) {
  return {
    type: constant.GET_ALL_AUTHOR_SUCCESS,
    data,
  };
}
export function getAllPublisher() {
  return {
    type: constant.GET_ALL_PUBLISHER,
  };
}
export function getAllPublisherSuccess(data) {
  return {
    type: constant.GET_ALL_PUBLISHER_SUCCESS,
    data,
  };
}
export function getBookByNameSuccess(data) {
  return {
    type: constant.GET_BOOK_BY_NAME_SUCCESS,
    data,
  };
}
export function getBookByName() {
  return {
    type: constant.GET_BOOK_BY_NAME,
  };
}
export function getBookByAuthorSuccess(data) {
  return {
    type: constant.GET_BOOK_BY_AUTHOR_SUCCESS,
    data,
  };
}
export function getBookByAuthor() {
  return {
    type: constant.GET_BOOK_BY_AUTHOR,
  };
}
export function getBookByPublisherSuccess(data) {
  return {
    type: constant.GET_ALL_PUBLISHER_SUCCESS,
    data,
  };
}
export function getBookByPublisher() {
  return {
    type: constant.GET_BOOK_BY_PUBLISHER,
  };
}
export function getBookByCategorySuccess(data) {
  return {
    type: constant.GET_BOOK_BY_CATEGORY_SUCCESS,
    data,
  };
}
export function getBookByCategory() {
  return {
    type: constant.GET_BOOK_BY_CATEGORY,
  };
}
export function apiLoadFail(error) {
  return {
    type: constant.DEFAULT_ACTION,
    error,
  };
}
