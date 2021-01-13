import { Error } from './error';
import { UnwrapResult } from './result_container';

export type Natural = 0[];
export type Zero = [];
export type One = [0];
export type NegativeValue = 'Negative Value';

export type Succ<N extends Natural> = [...N, 0];
export type Pred<N extends Natural | NegativeValue> = N extends NegativeValue
  ? NegativeValue
  : N extends Zero
  ? NegativeValue
  : N extends [...infer REMAINING, 0]
  ? REMAINING
  : never;

export type NumberToNatural<N extends number> = UnwrapResult<
  _NumberToNatural<Zero, N>
>;
type _NumberToNatural<
  NATURAL extends Natural,
  NUMBER extends number
> = NATURAL['length'] extends NUMBER
  ? NATURAL
  : { _: _NumberToNatural<Succ<NATURAL>, NUMBER> };

export type NaturalToNumber<N extends Natural> = N['length'];

export type Add<N1 extends Natural, N2 extends Natural> = [...N1, ...N2];

export type Sub<N1 extends Natural, N2 extends Natural> = N1 extends [
  ...N2,
  ...infer REMAINING
]
  ? REMAINING extends Natural
    ? REMAINING
    : never
  : NegativeValue;

export type Mod<N1 extends Natural, N2 extends Natural> = N2 extends Zero
  ? Error<'Mod: zero devided'>
  : UnwrapResult<_Mod<N1, N2, Add<N1, N2>>>;
type _Mod<
  N1 extends Natural | NegativeValue,
  N2 extends Natural,
  PREVN1 extends Natural
> = N1 extends Zero
  ? N1
  : N1 extends NegativeValue
  ? PREVN1
  : N1 extends Natural
  ? { _: _Mod<Sub<N1, N2>, N2, N1> }
  : never;
