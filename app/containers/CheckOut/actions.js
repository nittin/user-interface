/*
 *
 * CheckOut actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}
export function onChangeInput(name, value) {
  return {
    type: constants.ON_CHANGE_INPUT,
    name,
    value,
  };
}
export function getListCity() {
  return {
    type: constants.GET_LIST_CITY,
  };
}
export function getListCitySuccess(data) {
  return {
    type: constants.GET_LIST_CITY_SUCCESS,
    data,
  };
}
export function getListDistrict() {
  return {
    type: constants.GET_LIST_DISTRICT,
  };
}
export function getListDistrictSuccess(data) {
  return {
    type: constants.GET_LIST_DISTRICT_SUCCESS,
    data,
  };
}
export function getListWard() {
  return {
    type: constants.GET_LIST_WARD,
  };
}
export function getListWardSuccess(data) {
  return {
    type: constants.GET_LIST_WARD_SUCCESS,
    data,
  };
}
