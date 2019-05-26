import * as constants from './constants';

export function getAllCategory() {
  return {
    type: constants.GET_ALL_CATEGORY,
  };
}
export function getAllCategorySuccess(data) {
  return {
    type: constants.GET_ALL_CATEGORY_SUCCESS,
    data,
  };
}
export function getAllAuthor() {
  return {
    type: constants.GET_ALL_AUTHOR,
  };
}
export function getAllAuthorSuccess(data) {
  return {
    type: constants.GET_ALL_AUTHOR_SUCCESS,
    data,
  };
}
export function getAllPublisher() {
  return {
    type: constants.GET_ALL_PUBLISHER,
  };
}
export function getAllPublisherSuccess(data) {
  return {
    type: constants.GET_ALL_PUBLISHER_SUCCESS,
    data,
  };
}