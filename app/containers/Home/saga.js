import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import request from 'utils/request';
import {makeSelector} from './selectors';
import * as constants from './constants';
import * as actions from './actions';
// Individual exports for testing

export function* getNewBook() {
  const resource = 'book/get-all';
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
export default function* homeSaga() {
  yield takeLatest(constants.GET_NEW_BOOK, getNewBook);
  // See example in containers/HomePage/saga.js
}
