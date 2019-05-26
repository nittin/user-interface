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
  const searchKey = yield select(makeSelector('searchKey'));
  const page = yield select(makeSelector('page'));

  const resource = 'book';
  const params = {
    bookName: searchKey,
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
  const sortType = yield select(makeSelector('sortType'));
  const sortField = yield select(makeSelector('sortField'));
  const searchKey = yield select(makeSelector('searchKey'));
  const page = yield select(makeSelector('page'));
  const resource = 'book/get-by-category';
  const params = {
    categoryName: searchKey,
    sortType,
    sortField,
    limitNumber: 5,
    pageNumber: page,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getBookByCategorySuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByAuthor() {
  const sortType = yield select(makeSelector('sortType'));
  const sortField = yield select(makeSelector('sortField'));
  const searchKey = yield select(makeSelector('searchKey'));
  const page = yield select(makeSelector('page'));
  const resource = 'book/get-by-author';
  const params = {
    authorName: searchKey,
    sortType,
    sortField,
    limitNumber: 5,
    pageNumber: page,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getBookByAuthorSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListBookByPublisher() {
  const sortType = yield select(makeSelector('sortType'));
  const sortField = yield select(makeSelector('sortField'));
  const searchKey = yield select(makeSelector('searchKey'));
  const page = yield select(makeSelector('page'));
  const resource = 'book/get-by-publisher';
  const params = {
    publisher: searchKey,
    sortType,
    sortField,
    limitNumber: 5,
    pageNumber: page,
  };
  try {
    const response = yield call(getApi, resource, params);
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
  yield takeLatest(constants.GET_BOOK_BY_AUTHOR, getListBookByAuthor);
  yield takeLatest(constants.GET_BOOK_BY_CATEGORY, getListBookByCategory);
  yield takeLatest(constants.GET_BOOK_BY_PUBLISHER, getListBookByPublisher);

  // See example in containers/HomePage/saga.js
}
