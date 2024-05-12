export class StackOverflowError extends Error {
  constructor() {
    super('Stack overflow occurred.');

    this.name = 'StackOverflowError';

    Object.setPrototypeOf(this, StackOverflowError.prototype);
  }
}
