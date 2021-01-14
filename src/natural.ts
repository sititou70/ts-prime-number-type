import { Cast } from './utils';
import { UnwrapResult } from './result_container';

export type Natural = 0[];
export type Zero = [];
export type One = [0];

export type Succ<N extends Natural> = [...N, 0];

export type Add<N1 extends Natural, N2 extends Natural> = [...N1, ...N2];

export type NumberToNatural<N extends number> = Cast<
  UnwrapResult<_NumberToNatural<Zero, N>>,
  Natural
>;
type _NumberToNatural<
  NATURAL extends Natural,
  NUMBER extends number
> = NATURAL['length'] extends NUMBER
  ? NATURAL
  : { _: _NumberToNatural<Succ<NATURAL>, NUMBER> };

export type NaturalToNumber<N extends Natural> = N['length'];
