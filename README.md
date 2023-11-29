# @technically/omit-undefined

[![Test](https://github.com/technically-js/omit-undefined/actions/workflows/test.yml/badge.svg)](https://github.com/technically-js/omit-undefined/actions/workflows/test.yml)

`@technically/omit-undefined` is a micro-package to filter out undefined object properties.

## Usage

```ts
import { omitUndefined } from '@technically/omit-undefined';

const result = omitUndefined({ x: undefined, y: 1 }); // { y: 1 }
```

## Related packages

- [`@technically/is-not-undefined`](https://github.com/technically-js/is-not-undefined)
- [`@technically/is-not-null`](https://github.com/technically-js/is-not-null)

## License

[MIT](./LICENSE)

## Credits

Authored by Ivan Voskoboinyk.
