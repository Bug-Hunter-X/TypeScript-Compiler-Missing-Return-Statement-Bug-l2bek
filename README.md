# TypeScript Compiler Missing Return Statement Bug

This repository demonstrates a bug where the TypeScript compiler fails to detect a missing return statement in a function when the function is declared to return a boolean.  The `checkNumber` function is declared to return a boolean, but the `if` statement doesn't cover all possibilities, potentially resulting in a runtime error. The issue only appears when using a conditional without an `else` block for the return. This bug can be difficult to detect, especially in large codebases.

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code: `tsc bug.ts`
3. Observe that no errors are reported by the compiler.
4. Run the JavaScript code. If the `num` is above 10, it may return undefined rather than a boolean

## Solution

The solution involves explicitly returning a boolean value in all code paths of the `checkNumber` function. See `bugSolution.ts` for the fix.

## Additional Notes

This bug highlights the importance of thorough code review and testing to catch these subtle errors. While TypeScript offers excellent type checking, it's not infallible and can sometimes miss edge cases like this.