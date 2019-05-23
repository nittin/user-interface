import { fromJS } from 'immutable';
import listBooksReducer from '../reducer';

describe('listBooksReducer', () => {
  it('returns the initial state', () => {
    expect(listBooksReducer(undefined, {})).toEqual(fromJS({}));
  });
});
