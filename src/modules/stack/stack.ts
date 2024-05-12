import { Optional } from '@/types';
import { StackOverflowError } from '@/utils';
import { StackOptionsI } from '@/interfaces';

/**
 * Stack class for managing a stack data structure.
 * @template E - The type of elements in the stack.
 */
export class Stack<E> {
  /**
   * The elements in the stack.
   * @type {Array<E>}
   * @protected
   */
  protected _elements: Array<E> = [];

  /**
   * The options for the stack.
   * @type {StackOptionsI}
   * @private
   */
  private readonly _options: StackOptionsI = {};

   /**
   * Creates a new Stack.
   * @param {Array<E>} [elements] - The initial elements in the stack.
   * @param {StackOptionsI} [options] - The options for the stack.
   */
  constructor(elements?: Array<E>, options?: StackOptionsI) {
    if (elements) {
      this._elements = [...elements];
    }

    if (options) {
      this._options = options;
    }
  }

  push(element: E): boolean {
    if (this.isFull()) {
      throw new StackOverflowError();
    }

    this._elements.push(element);

    return true;
  }

  pop(): Optional<E> {
    return this._elements.pop();
  }

  get size(): number {
    return this._elements.length;
  }

  get peek(): Optional<E> {
    return this._elements[this._elements.length - 1];
  }

  get top(): Optional<E> {
    return this.peek;
  }

  isEmpty(): boolean {
    return this._elements.length === 0;
  }

  isFull(): boolean {
    return this._options.maxSize ? this._elements.length === this._options.maxSize : true;
  }

  print() {
    console.log(...this._elements);
  }

  fromArray<E>(elements: Array<E>): Stack<E> {
    return new Stack(elements);
  }
}
