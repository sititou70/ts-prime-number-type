export type Error<REASON extends string> = { type: 'error'; reason: REASON };
