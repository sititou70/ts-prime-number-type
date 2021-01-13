import { assert, IsExact } from 'conditional-type-checks';
import { Error } from '../utils';
import {
  Pred,
  Succ,
  NumberToNatural,
  NaturalToNumber,
  Add,
  NegativeValue,
  Sub,
} from '../natural';

// test data
type Natural5 = [0, 0, 0, 0, 0];
type Natural10 = [...Natural5, ...Natural5];
type Natural50 = [
  ...Natural10,
  ...Natural10,
  ...Natural10,
  ...Natural10,
  ...Natural10
];
type Natural100 = [...Natural50, ...Natural50];
type Natural500 = [
  ...Natural100,
  ...Natural100,
  ...Natural100,
  ...Natural100,
  ...Natural100
];

// test
assert<IsExact<Succ<[]>, [0]>>(true);
assert<IsExact<Succ<[0]>, [0, 0]>>(true);

assert<IsExact<Pred<[]>, NegativeValue>>(true);
assert<IsExact<Pred<[0]>, []>>(true);
assert<IsExact<Pred<[0, 0]>, [0]>>(true);
assert<IsExact<Pred<NegativeValue>, NegativeValue>>(true);

assert<IsExact<NumberToNatural<0>, []>>(true);
assert<IsExact<NumberToNatural<1>, [0]>>(true);
assert<IsExact<NumberToNatural<2>, [0, 0]>>(true);
assert<IsExact<NumberToNatural<5>, Natural5>>(true);
assert<IsExact<NumberToNatural<10>, Natural10>>(true);
assert<IsExact<NumberToNatural<50>, Natural50>>(true);
assert<IsExact<NumberToNatural<100>, Natural100>>(true);
assert<IsExact<NumberToNatural<500>, Natural500>>(true);

assert<IsExact<NaturalToNumber<[]>, 0>>(true);
assert<IsExact<NaturalToNumber<[0]>, 1>>(true);
assert<IsExact<NaturalToNumber<[0, 0]>, 2>>(true);
assert<IsExact<NaturalToNumber<Natural5>, 5>>(true);
assert<IsExact<NaturalToNumber<Natural10>, 10>>(true);
assert<IsExact<NaturalToNumber<Natural50>, 50>>(true);
assert<IsExact<NaturalToNumber<Natural100>, 100>>(true);
assert<IsExact<NaturalToNumber<Natural500>, 500>>(true);

assert<
  IsExact<Add<NumberToNatural<0>, NumberToNatural<0>>, NumberToNatural<0>>
>(true);
assert<
  IsExact<Add<NumberToNatural<0>, NumberToNatural<1>>, NumberToNatural<1>>
>(true);
assert<
  IsExact<Add<NumberToNatural<1>, NumberToNatural<0>>, NumberToNatural<1>>
>(true);
assert<
  IsExact<Add<NumberToNatural<3>, NumberToNatural<2>>, NumberToNatural<5>>
>(true);
assert<
  IsExact<Add<NumberToNatural<100>, NumberToNatural<50>>, NumberToNatural<150>>
>(true);

assert<
  IsExact<Sub<NumberToNatural<0>, NumberToNatural<0>>, NumberToNatural<0>>
>(true);
assert<IsExact<Sub<NumberToNatural<0>, NumberToNatural<1>>, NegativeValue>>(
  true
);
assert<
  IsExact<Sub<NumberToNatural<1>, NumberToNatural<0>>, NumberToNatural<1>>
>(true);
assert<
  IsExact<Sub<NumberToNatural<3>, NumberToNatural<2>>, NumberToNatural<1>>
>(true);
assert<
  IsExact<Sub<NumberToNatural<100>, NumberToNatural<50>>, NumberToNatural<50>>
>(true);
