import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detail state domain
 */

const selectDetailDomain = state => state.get('detail', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Detail
 */

const makeSelectDetail = () =>
  createSelector(selectDetailDomain, substate => substate.toJS());
const makeSelector = props =>
  createSelector(selectDetailDomain, substate => substate.get(props));
export default makeSelectDetail;
export { selectDetailDomain, makeSelector };
