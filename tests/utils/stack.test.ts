import { Stack } from "@/modules/stack/stack";
import { StackEmptyError } from "@/utils";

describe('stack', () => {
  it('with no elements and options', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.peek).toBe(3);
    expect(stack.top).toBe(3);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(() => stack.peek).toThrow(new StackEmptyError());
  });
});