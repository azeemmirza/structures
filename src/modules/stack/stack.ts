import { Maybe } from '@/types';
import { StackEmptyError, StackOverflowError, StackUnderFlowError } from '@/utils';
import { StackOptionsI } from '@/interfaces';

const MAX_OPTIONS_SIZE = 100;

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
  protected _elements: Array<E>;

  /**
   * The options for the stack.
   * @type {StackOptionsI}
   * @private
   */
  private readonly _options: StackOptionsI;

   /**
   * Creates a new Stack.
   * @param {Array<E>} [elements] - The initial elements in the stack.
   * @param {StackOptionsI} [options] - The options for the stack.
   */
  constructor(elements?: Array<E>, options?: StackOptionsI) {
    this._options = {}
    this._options.maxSize = options?.maxSize || MAX_OPTIONS_SIZE
    const elementsLength = elements?.length || 0

    if ((this._options.maxSize - elementsLength) < 0) throw new StackOverflowError();

    this._elements = elements ? structuredClone(elements) : [];
  }

  push(element: E): boolean {
    if (this.isFull()) {
      throw new StackOverflowError();
    }

    this._elements.push(element);

    return true;
  }

  pop(): Maybe<E> {
    if (this.isEmpty())  {
      throw new StackUnderFlowError()
    }
    return this._elements.pop() ?? null;
  }

  get size(): number {
    return this._elements.length;
  }

  get peek(): Maybe<E> {
    if (this.isEmpty())  {
      throw new StackEmptyError()
    }
    return this._elements[this.size - 1] ?? null;
  }

  get top(): Maybe<E> {
    return this.peek;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this._options.maxSize ? this.size === this._options.maxSize : true;
  }

  print() {
    console.log(...this._elements);
  }

  fromArray<E>(elements: Array<E>): Stack<E> {
    return new Stack(elements);
  }
}
