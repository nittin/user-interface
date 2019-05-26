import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkOut state domain
 */

const selectCheckOutDomain = state => state.get('checkOut', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckOut
 */

const makeSelectCheckOut = () =>
  createSelector(selectCheckOutDomain, substate => substate.toJS());
const makeSelector = props =>
  createSelector(selectCheckOutDomain, substate => substate.get(props));

export default makeSelectCheckOut;
export { selectCheckOutDomain, makeSelector };
