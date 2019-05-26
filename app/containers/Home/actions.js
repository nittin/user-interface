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
export function getListLiterary() {
  return {
    type: constants.GET_LIST_LITERARY,
  };
}
export function getListLiterarySuccess(data) {
  return {
    type: constants.GET_LIST_LITERARY_SUCCESS,
    data,
  };
}
export function getListCurriculum() {
  return {
    type: constants.GET_LIST_CURRICULUM,
  };
}
export function getListCurriculumSuccess(data) {
  return {
    type: constants.GET_LIST_CURRICULUM_SUCCESS,
    data,
  };
}
export function getListNewPublished() {
  return {
    type: constants.GET_LIST_NEW_PUBLISHED,
  };
}
export function getListNewPublishedSuccess(data) {
  return {
    type: constants.GET_LIST_NEW_PUBLISHED_SUCCESS,
    data,
  };
}
export function getListNovel() {
  return {
    type: constants.GET_LIST_NOVEL,
  };
}
export function getListNovelSuccess(data) {
  return {
    type: constants.GET_LIST_NOVEL_SUCCESS,
    data,
  };
}