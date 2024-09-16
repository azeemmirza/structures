export function sum(...args: number[]) {
  return args.reduce((acc, cur) => acc + cur, 0);
}

export function subtract(...args: number[]) {
  console.log(args);
}

export function multiply(...args: number[]) {
  console.log(args)
}
