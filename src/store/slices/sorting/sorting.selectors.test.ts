import { NameSpace, SORT_TYPES } from '../../../constants';
import { getCurrentSort } from './selectors';

describe('Sorting selectors', () => {
  it('should return reviews as null', () => {
    const state = {
      [NameSpace.Sorting]: {
        sorting: SORT_TYPES[0],
      }
    };
    const expectedState = SORT_TYPES[0];

    const result = getCurrentSort(state);

    expect(result).toBe(expectedState);

  });
});
