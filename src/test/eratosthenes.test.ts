import { assert, IsExact } from 'conditional-type-checks';
import {
  GetInitialSieve,
  GetPrimeNumbers,
  SieveOfEratosthenes,
  SieveToNumbers,
  StepFill,
} from '../eratosthenes';
import { Error } from '../error';
import { NumberToNatural } from '../natural';

assert<IsExact<GetInitialSieve<NumberToNatural<0>>, []>>(true);
assert<IsExact<GetInitialSieve<NumberToNatural<1>>, [false]>>(true);
assert<IsExact<GetInitialSieve<NumberToNatural<2>>, [false, false]>>(true);
assert<IsExact<GetInitialSieve<NumberToNatural<3>>, [false, false, true]>>(
  true
);
assert<
  IsExact<
    GetInitialSieve<NumberToNatural<10>>,
    [false, false, true, true, true, true, true, true, true, true]
  >
>(true);

assert<
  IsExact<
    StepFill<[true, true, true], NumberToNatural<0>, NumberToNatural<1>, false>,
    [false, false, false]
  >
>(true);
assert<
  IsExact<
    StepFill<[true, true, true], NumberToNatural<0>, NumberToNatural<0>, false>,
    Error<'StepFill: STEP must not be 0'>
  >
>(true);
assert<
  IsExact<
    StepFill<
      [true, true, true, true, true, true, true, true, true, true],
      NumberToNatural<0>,
      NumberToNatural<2>,
      false
    >,
    [false, true, false, true, false, true, false, true, false, true]
  >
>(true);
assert<
  IsExact<
    StepFill<
      [true, true, true, true, true, true, true, true, true, true],
      NumberToNatural<6>,
      NumberToNatural<3>,
      false
    >,
    [true, true, true, true, true, true, false, true, true, false]
  >
>(true);

assert<
  IsExact<
    SieveOfEratosthenes<GetInitialSieve<NumberToNatural<30>>>,
    [
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      true
    ]
  >
>(true);

assert<
  IsExact<
    SieveToNumbers<[false, false, true, true, false, true, false, true, false]>,
    [2, 3, 5, 7]
  >
>(true);

//assert<IsExact<GetPrimeNumbers<30>, [2, 3, 5, 7, 11, 13, 17]>>(true);
