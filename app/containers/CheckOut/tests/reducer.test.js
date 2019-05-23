import { fromJS } from 'immutable';
import checkOutReducer from '../reducer';

describe('checkOutReducer', () => {
  it('returns the initial state', () => {
    expect(checkOutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
