import { testUtils } from '../../src/utils/test-utils';

describe('utils/sum', () => {
  it('should work with positive integers', () => {
    const result = testUtils(1, 2, 3, 4);

    expect(result).toEqual(10);
  });

  it('should work with negative integers', () => {
    const result = testUtils(1, -2, 3, 4);

    expect(result).toEqual(6);
  });
});
