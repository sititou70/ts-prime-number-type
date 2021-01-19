import { Cast, Error } from './utils';
import {
  Zero,
  Natural,
  Succ,
  Add,
  NaturalToNumber,
  One,
  NumberToNatural,
} from './natural';
import { ExtractResult } from './result_container';

export type Sieve = boolean[];

export type GetInitialSieve<N extends Natural> = Cast<
  ExtractResult<_GetInitialSieve<Zero, Succ<N>, []>>,
  Sieve
>;
type _GetInitialSieve<
  I extends Natural,
  N extends Natural,
  S extends Sieve
> = I extends N
  ? S
  : I extends Zero
  ? {
      _: _GetInitialSieve<Succ<I>, N, [...S, false]>;
    }
  : I extends One
  ? {
      _: _GetInitialSieve<Succ<I>, N, [...S, false]>;
    }
  : {
      _: _GetInitialSieve<Succ<I>, N, [...S, true]>;
    };

export type StepFill<
  ARRAY extends unknown[],
  START extends Natural,
  STEP extends Natural,
  VALUE extends unknown
> = STEP extends Zero
  ? Error<'StepFill: STEP must not be 0'>
  : ExtractResult<
      _StepFill<
        [],
        Zero,
        START,
        {
          step: STEP;
          value: VALUE;
          orig_array: ARRAY;
          array_length: ARRAY['length'];
        }
      >
    >;
type _StepFill<
  ARRAY extends unknown[],
  INDEX extends Natural,
  NEXT_STEP_INDEX extends Natural,
  CONSTS extends {
    step: Natural;
    value: unknown;
    orig_array: unknown[];
    array_length: number;
  }
> = NaturalToNumber<INDEX> extends CONSTS['array_length']
  ? ARRAY
  : INDEX extends NEXT_STEP_INDEX
  ? {
      _: _StepFill<
        [...ARRAY, CONSTS['value']],
        Succ<INDEX>,
        Add<NEXT_STEP_INDEX, CONSTS['step']>,
        CONSTS
      >;
    }
  : {
      _: _StepFill<
        [...ARRAY, CONSTS['orig_array'][NaturalToNumber<INDEX>]],
        Succ<INDEX>,
        NEXT_STEP_INDEX,
        CONSTS
      >;
    };

export type SieveOfEratosthenes<S extends Sieve> = ExtractResult<
  _SieveOfEratosthenes<S, NumberToNatural<2>>
>;
type _SieveOfEratosthenes<S extends Sieve, N extends Natural> = S extends Sieve
  ? NaturalToNumber<N> extends S['length']
    ? S
    : S[NaturalToNumber<N>] extends true
    ? {
        _: _SieveOfEratosthenes<
          Cast<StepFill<S, Add<N, N>, N, false>, Sieve>,
          Succ<N>
        >;
      }
    : { _: _SieveOfEratosthenes<S, Succ<N>> }
  : Error<'_SieveOfEratosthenes: S is not Sieve'>;

export type SieveToNumbers<S extends Sieve> = ExtractResult<
  _SieveToNumbers<S, [], Zero>
>;
type _SieveToNumbers<
  S extends Sieve,
  NUMBERS extends number[],
  I extends Natural
> = NaturalToNumber<I> extends S['length']
  ? NUMBERS
  : S[NaturalToNumber<I>] extends true
  ? { _: _SieveToNumbers<S, [...NUMBERS, NaturalToNumber<I>], Succ<I>> }
  : { _: _SieveToNumbers<S, NUMBERS, Succ<I>> };

export type PrimeNumbers<MAX extends number> = SieveToNumbers<
  Cast<_PrimeNumbers<MAX>, Sieve>
>;
type _PrimeNumbers<MAX extends number> = SieveOfEratosthenes<
  Cast<__PrimeNumbers<MAX>, Sieve>
> extends infer A
  ? A
  : never;
type __PrimeNumbers<MAX extends number> = SieveOfEratosthenes<
  GetInitialSieve<NumberToNatural<MAX>>
> extends infer A
  ? A
  : never;
