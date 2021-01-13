export type Error<REASON extends string> = { type: 'error'; reason: REASON };

export type Cast<T, P> = T extends P ? T : P;
