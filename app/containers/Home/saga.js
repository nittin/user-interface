import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import request from 'utils/request';
import {makeSelector} from './selectors';
import * as constants from './constants';
import * as actions from './actions';
// Individual exports for testing

export function* getNewBook() {
  const resource = 'book';
  const params = {
    bookName: '',
    limitNumber: 8,
    pageNumber: 0,
    sortType: 'desc',
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getNewBookSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getNewPublished() {
  const resource = 'book';
  const params = {
    bookName: '',
    limitNumber: 8,
    pageNumber: 0,
    sortType: 'desc',
    sortField: 'publish_year',
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListNewPublishedSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListNovel() {
  const resource = 'book/get-by-category';
  const params = {
    category: 'tâm lý',
    limitNumber: 8,
    pageNumber: 0,
    sortType: 'desc',
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListNovelSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListLiterary() {
  const resource = 'book/get-by-category';
  const params = {
    category: 'văn hóa',
    limitNumber: 8,
    pageNumber: 0,
    sortType: 'desc',
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListLiterarySuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListCurriculum() {
  const resource = 'book/get-by-category';
  const params = {
    category: 'giáo trình',
    limitNumber: 8,
    pageNumber: 0,
    sortType: 'desc',
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListCurriculumSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* homeSaga() {
  yield takeLatest(constants.GET_NEW_BOOK, getNewBook);
  yield takeLatest(constants.GET_LIST_CURRICULUM, getListCurriculum);
  yield takeLatest(constants.GET_LIST_LITERARY, getListLiterary);
  yield takeLatest(constants.GET_LIST_NEW_PUBLISHED, getNewPublished);
  yield takeLatest(constants.GET_LIST_NOVEL, getListNovel);

  // See example in containers/HomePage/saga.js
}
