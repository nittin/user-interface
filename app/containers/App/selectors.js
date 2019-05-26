/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => state.get('app', initialState);
const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());
const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );
const makeSelector = props =>
  createSelector(selectAppDomain, globalState => globalState.get(props));
export default { makeSelectApp };
export { selectAppDomain, makeSelector };
