// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import { makeSelector } from './selectors';
import * as constants from './constants';
import * as actions from './actions';
// Individual exports for testing
export function* getBookById() {
  const bookId = yield select(makeSelector('bookId'));
  const resource = `book/${bookId}`;
  try {
    const response = yield call(getApi, resource, {});
    yield put(actions.getBookByIdSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export default function* detailSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(constants.GET_BOOK_BY_ID, getBookById);
}
