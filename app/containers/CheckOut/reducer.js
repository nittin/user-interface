/*
 *
 * CheckOut reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  loading: null,
  listCity: null,
  listDistrict: null,
  listWard: null,
});

function checkOutReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DEFAULT_ACTION:
      return state;
    case constants.ON_CHANGE_INPUT:
      return state.set(action.name, action.value);
    case constants.GET_LIST_CITY:
      return state.set('loading', { ...state.get('loading'), city: true });
    case constants.GET_LIST_CITY_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), city: false })
        .set('listCity', action.data);
    case constants.GET_LIST_DISTRICT:
      return state.set('loading', { ...state.get('loading'), district: true });
    case constants.GET_LIST_DISTRICT_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), district: false })
        .set('listDistrict', action.data);
    case constants.GET_LIST_WARD:
      return state.set('loading', { ...state.get('loading'), ward: true });
    case constants.GET_LIST_WARD_SUCCESS:
      return state
        .set('loading', { ...state.get('loading'), ward: false })
        .set('listWard', action.data);
    default:
      return state;
  }
}

export default checkOutReducer;
