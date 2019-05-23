import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listBooks state domain
 */

const selectListBooksDomain = state => state.get('listBooks', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListBooks
 */

const makeSelectListBooks = () =>
  createSelector(selectListBooksDomain, substate => substate.toJS());
const makeSelector = props =>
  createSelector(selectListBooksDomain, substate => substate.get(props));
export default makeSelectListBooks;
export { selectListBooksDomain, makeSelector };
