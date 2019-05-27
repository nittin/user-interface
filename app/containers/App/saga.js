// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import request from 'utils/request';
import { makeSelector } from './selectors';
import * as constants from './constants';
import * as actions from './actions';
// Individual exports for testing

export function* getListCategory() {
  const resource = 'category/get-all';
  const params = {
    limitNumber: 10,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getAllCategorySuccess(response.data));
  } catch (e) {
    console.log(e);
  }

}
export function* getListAuthor() {
  const resource = 'author/get-all';
  const params = {
    limitNumber: 10,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getAllAuthorSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListPublisher() {
  const resource = 'publisher/get-all';
  const params = {
    limitNumber: 10,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getAllPublisherSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(constants.GET_ALL_CATEGORY, getListCategory);
  yield takeLatest(constants.GET_ALL_AUTHOR, getListAuthor);
  yield takeLatest(constants.GET_ALL_PUBLISHER, getListPublisher);
}
