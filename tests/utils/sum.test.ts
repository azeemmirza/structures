// import { sum } from '../../src/utils/test-utils';

// describe('utils/test-utils', () => {
//   it('should work with positive integers', () => {
//     const result = sum(1, 2, 3, 4);

//     expect(result).toEqual(10);
//   });

//   it('should work with negative integers', () => {
//     const result = sum(1, -2, 3, 4);

//     expect(result).toEqual(6);
//   });
// });

import { Stack } from './stack'; // Adjust the path as needed
import { StackOverflowError } from '@/utils';

interface StackOptionsI {
  maxSize?: number;
}

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should initialize with no elements', () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('should push an element to the stack', () => {
    stack.push(10);
    expect(stack.size).toBe(1);
    expect(stack.peek).toBe(10);
  });

  test('should pop an element from the stack', () => {
    stack.push(20);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(20);
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('should peek at the top element without removing it', () => {
    stack.push(30);
    expect(stack.peek).toBe(30);
    expect(stack.size).toBe(1);
  });

  test('should return undefined when popping from an empty stack', () => {
    expect(stack.pop()).toBeUndefined();
  });

  test('should throw StackOverflowError when exceeding maxSize', () => {
    const options: StackOptionsI = { maxSize: 2 };
    const limitedStack = new Stack<number>([], options);

    limitedStack.push(1);
    limitedStack.push(2);

    expect(() => limitedStack.push(3)).toThrow(StackOverflowError);
  });

  test('should return true for isFull when stack reaches maxSize', () => {
    const options: StackOptionsI = { maxSize: 2 };
    const limitedStack = new Stack<number>([], options);

    limitedStack.push(1);
    limitedStack.push(2);

    expect(limitedStack.isFull()).toBe(true);
  });

  test('should print all elements', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    stack.push(10);
    stack.push(20);
    stack.print();

    expect(consoleSpy).toHaveBeenCalledWith(10, 20);
    consoleSpy.mockRestore();
  });

  test('should create a stack from an array', () => {
    const array = [1, 2, 3];
    const stackFromArray = stack.fromArray(array);
    expect(stackFromArray.size).toBe(3);
    expect(stackFromArray.peek).toBe(3);
  });
});

