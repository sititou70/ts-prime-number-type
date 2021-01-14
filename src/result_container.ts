export type ResultContainer<T> = { _: T };

export type UnwrapResult<CONTAINER> = CONTAINER extends { _: unknown }
  ? UnwrapResult<_UnwrapResult<CONTAINER>>
  : CONTAINER;
export type _UnwrapResult<CONTAINER> = CONTAINER extends {
  _: { _: infer CONTENTS };
}
  ? { _: _UnwrapResult<CONTENTS> }
  : CONTAINER extends { _: infer CONTENTS }
  ? CONTENTS
  : CONTAINER;
