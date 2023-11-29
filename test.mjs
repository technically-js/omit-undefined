import assert from 'node:assert';

import { omitUndefined } from './index.js';

function assertEqual(a, b) {
    assert(JSON.stringify(a) === JSON.stringify(b));
}

assertEqual(
    omitUndefined({ }),
    { },
);
assertEqual(
    omitUndefined({ a: 1 }),
    { a: 1 },
);
assertEqual(
    omitUndefined({ a: 1, b: undefined, c: null, d: 0, e: false, f: [], g: {} }),
    { a: 1, c: null, d: 0, e: false, f: [], g: {} },
);
