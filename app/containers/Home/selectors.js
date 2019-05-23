import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.get('home', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(selectHomeDomain, substate => substate.toJS());
const makeSelector = props =>
  createSelector(selectHomeDomain, substate => substate.get(props));
export default { makeSelectHome };
export { selectHomeDomain, makeSelector };
