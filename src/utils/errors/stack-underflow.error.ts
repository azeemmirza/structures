export class StackUnderFlowError extends Error {
  constructor() {
    super('Stack underflow occurred.');

    this.name = 'StackUnderFlowError';

    Object.setPrototypeOf(this, StackUnderFlowError.prototype);
  }
}
