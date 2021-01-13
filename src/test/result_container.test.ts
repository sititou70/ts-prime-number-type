import { UnwrapResult } from '../result_container';
import { assert, IsExact } from 'conditional-type-checks';

assert<IsExact<UnwrapResult<{ _: 0 }>, 0>>(true);
assert<IsExact<UnwrapResult<{ _: { _: 0 } }>, 0>>(true);
assert<IsExact<UnwrapResult<{ _: { _: { _: 0 } } }>, 0>>(true);
assert<IsExact<UnwrapResult<{ _: { _: { _: { _: 0 } } } }>, 0>>(true);
assert<IsExact<UnwrapResult<{ _: { _: { _: { _: { _: 0 } } } } }>, 0>>(true);
