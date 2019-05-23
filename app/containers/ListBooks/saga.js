// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import * as constants from './constants';
import * as actions from './actions';
import { makeSelector } from './selectors';
// Individual exports for testing
export function* getListCategory() {
  const resource = 'category/get-all';
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getAllCategorySuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListAuthor() {
  const resource = 'author/get-all';
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getAllAuthorSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListPublisher() {
  const resource = 'publisher/get-all';
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getAllPublisherSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByName() {
  const sortType = yield select(makeSelector('sortType'));
  const sortField = yield select(makeSelector('sortField'));
  const page = yield select(makeSelector('page'));

  const resource = 'book/get-all';
  const params = {
    sortType,
    sortField,
    limitNumber: 5,
    pageNumber: page,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getBookByNameSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByCategory() {
  const resource = 'book/get-by-category';
  const params = {
  }
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getBookByCategorySuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByAuthor() {
  const resource = 'book/get-by-author';
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getBookByAuthorSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByPublisher() {
  const resource = 'book/get-by-publisher';
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getBookByPublisherSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export default function* listBooksSaga() {
  yield takeLatest(constants.GET_ALL_CATEGORY, getListCategory);
  yield takeLatest(constants.GET_ALL_PUBLISHER, getListPublisher);
  yield takeLatest(constants.GET_ALL_AUTHOR, getListAuthor);
  yield takeLatest(constants.GET_BOOK_BY_NAME, getListBookByName);

  // See example in containers/HomePage/saga.js
}
