export function sum(...args: number[]) {
  return args.reduce((acc, cur) => acc + cur, 0);
}