// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getApi } from 'utils/appRequest';
import request from 'utils/request';
import { makeSelector } from './selectors';
import * as constants from './constants';
import * as actions from './actions';
// Individual exports for testing

export function* getListCity() {
  const cityName = yield select(makeSelector('cityName'));
  const resource = 'city/get-all';
  const params = {
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListCitySuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListDistrict() {
  const city = yield select(makeSelector('city'));
  const resource = 'district/get-all';
  const params = {
    cityName: city.value,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListDistrictSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* getListWard() {
  const district = yield select(makeSelector('district'));
  const resource = 'ward/get-all';
  const params = {
    districtName: district.value,
  };
  try {
    const response = yield call(getApi, resource, params);
    yield put(actions.getListWardSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
// Individual exports for testing
export default function* checkOutSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(constants.GET_LIST_CITY, getListCity);
  yield takeLatest(constants.GET_LIST_DISTRICT, getListDistrict);
  yield takeLatest(constants.GET_LIST_WARD, getListWard);
}
