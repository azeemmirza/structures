import { sum } from '../../src/utils/sum';

describe('utils/sum', () => {
  it('should work with positive integers', () => {
    const result = sum(1, 2, 3, 4);

    expect(result).toEqual(10);
  });

  it('should work with negative integers', () => {
    const result = sum(1, -2, 3, 4);

    expect(result).toEqual(6);
  });
});