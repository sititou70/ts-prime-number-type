import { ExtractResult } from '../result_container';
import { assert, IsExact } from 'conditional-type-checks';

assert<IsExact<ExtractResult<{ _: 0 }>, 0>>(true);
assert<IsExact<ExtractResult<{ _: { _: 0 } }>, 0>>(true);
assert<IsExact<ExtractResult<{ _: { _: { _: 0 } } }>, 0>>(true);
assert<IsExact<ExtractResult<{ _: { _: { _: { _: 0 } } } }>, 0>>(true);
assert<IsExact<ExtractResult<{ _: { _: { _: { _: { _: 0 } } } } }>, 0>>(true);
