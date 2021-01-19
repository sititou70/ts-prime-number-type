export type ResultContainer<T> = { _: T };

export type ExtractResult<CONTAINER> = CONTAINER extends { _: unknown }
  ? ExtractResult<_ExtractResult<CONTAINER>>
  : CONTAINER;
export type _ExtractResult<CONTAINER> = CONTAINER extends {
  _: { _: infer CONTENTS };
}
  ? { _: _ExtractResult<CONTENTS> }
  : CONTAINER extends { _: infer CONTENTS }
  ? CONTENTS
  : CONTAINER;
