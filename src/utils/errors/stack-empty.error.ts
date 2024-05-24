export class StackEmptyError extends Error {
  constructor() {
    super('Stack empty occurred.');

    this.name = 'StackEmptyError';

    Object.setPrototypeOf(this, StackEmptyError.prototype);
  }
}
