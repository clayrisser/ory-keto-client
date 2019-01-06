# ory-keto-client

[![npm](https://img.shields.io/npm/dt/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![GitHub](https://img.shields.io/github/license/codejamninja/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![npm type definitions](https://img.shields.io/npm/types/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![GitHub stars](https://img.shields.io/github/stars/codejamninja/ory-keto-client.svg?label=Stars&style=flat-square)](https://github.com/codejamninja/ory-keto-client)


> Ory Keto access control client for JavaScript and TypeScript

Please ★ this repo if you found it useful ★ ★ ★


## Features

* compatible with typescript
* supports multiple roles
* supports custom policies


## Installation

```sh
npm install --save ory-keto-client
```


## Dependencies

* [NodeJS](https://nodejs.org)


## Usage

Import `ory-keto-client`
```js
import Keto from 'ory-keto-client';
```

Create keto instance
```js
const { env } = process;
const keto = new Keto(env.KETO_BASE_URL || 'http://localhost:4466');
```

Create policy
```js
keto.createPolicy({
  description: 'bob is allowed read the blog',
  subjects: ['bob'],
  effect: 'allow',
  actions: ['read']
  resources: ['blog'],
});
```

Authorize subject
```js
if (await keto.authorizeSubject('bob', 'read', 'blog')) {
  console.log('Authorized');
} else {
  console.log('Not Authorized');
}
```


## Support

Submit an [issue](https://github.com/codejamninja/ory-keto-client/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/ory-keto-client/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/codejamninja/ory-keto-client/blob/master/LICENSE)

[Jam Risser](https://codejam.ninja) © 2018


## Changelog

Review the [changelog](https://github.com/codejamninja/ory-keto-client/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://codejam.ninja) - Author


## Support on Liberapay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://liberapay.com/codejamninja/donate) if you'd like to keep me going!

[![Liberapay receiving](https://img.shields.io/liberapay/receives/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
