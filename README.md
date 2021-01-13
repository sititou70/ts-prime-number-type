# ts-prime-number-type

Calculate prime numbers using the **only typescript type system.**

## setup

`npm i`

## run

`npm start`

and you will get the below error.

```
src/index.ts:3:7 - error TS2322: Type 'string' is not assignable to type '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293]'.

12 const primes: PrimeNumbers = 'string';
         ~~~~~~


Found 1 error.
```

Calculated prime numbers are displayed after "Type 'string' is not assignable to type..." message.

## test

`npm test`

## licence

MIT
