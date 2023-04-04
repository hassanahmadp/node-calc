export const add = (...args: number[]): void => console.log(args.reduce((a, b) => a + b));
export const subtract = (...args: number[]): void => console.log(args.reduce((a, b) => a - b));
export const multiply = (...args: number[]): void => console.log(args.reduce((a, b) => a * b));
export const divide = (...args: number[]): void => console.log(args.reduce((a, b) => a / b));
