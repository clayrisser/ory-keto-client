# ory-keto-client

[![npm](https://img.shields.io/npm/dt/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![GitHub](https://img.shields.io/github/license/codejamninja/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![npm type definitions](https://img.shields.io/npm/types/ory-keto-client.svg?style=flat-square)](https://www.npmjs.com/package/ory-keto-client)
[![GitHub stars](https://img.shields.io/github/stars/codejamninja/ory-keto-client.svg?label=Stars&style=flat-square)](https://github.com/codejamninja/ory-keto-client)


> unopinionated role based access control

Please ★ this repo if you found it useful ★ ★ ★


## Features

* unopinionated
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
import { Policy, Role, Statement, Subject } from 'ory-keto-client';
```

Create statements
```js
const statements = {
  readFile: new Statement('read', 'file'),
  readFolder: new Statement('read', 'folder'),
  removeFile: new Statement('remove', 'file'),
  removeFolder: new Statement('remove', 'folder'),
  writeFile: new Statement('write', 'file'),
  writeFolder: new Statement('write', 'folder')
};
```

Create policies from statements
```js
const policies = {
  readFile: new Policy('readFile', [statements.readFile]),
  readFolder: new Policy('readFolder', [statements.readFolder]),
  removeFile: new Policy('removeFile', [statements.removeFile]),
  removeFolder: new Policy('removeFolder', [statements.removeFolder]),
  writeFile: new Policy('readFile', [statements.writeFile]),
  writeFolder: new Policy('readFolder', [statements.writeFolder]),
  readAll: new Policy('readAll', [statements.readFile, statements.readFolder]),
  removeAll: new Policy('removeAll', [
    statements.removeFile,
    statements.removeFolder
  ]),
  writeAll: new Policy('readAll', [
    statements.writeFile,
    statements.writeFolder
  ]),
  allFiles: new Policy('allFiles', [
    statements.readFile,
    statements.writeFile,
    statements.removeFile
  ]),
  allFolders: new Policy('allFolders', [
    statements.readFolder,
    statements.writeFolder,
    statements.removeFolder
  ])
};
```

Create roles from policies
```js
const roles = {
  visitor: new Role('visitor', [policies.readAll]),
  user: new Role('user', [policies.readAll, policies.writeAll]),
  admin: new Role('admin', [policies.allFiles, policies.allFolders])
};
```

Assign roles to subjects

```js
const someVisitor = new Subject('someVisitor', [roles.visitor]);
const someAdmin = new Subject('someVisitor', [roles.admin]);
```

Check if subject can execute statement
```js
someVisitor.can(statements.readFile); // true
someVisitor.can(statements.deleteFile); // false

someAdmin.can(statements.readFile); // true
someAdmin.can(statements.deleteFile); // true
```


## Support

Submit an [issue](https://github.com/codejamninja/ory-keto-client/issues/new)


## Roadmap

* Support role inheritance
* Support blocking statements
* Support resource ownership
* Support role tagging


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
