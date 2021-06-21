[![NPM version](https://img.shields.io/npm/v/jest-expect-subclass.svg)](https://www.npmjs.com/package/jest-expect-subclass)
[![Build Status](https://img.shields.io/travis/overlookmotel/jest-expect-subclass/master.svg)](http://travis-ci.org/overlookmotel/jest-expect-subclass)
[![Dependency Status](https://img.shields.io/david/overlookmotel/jest-expect-subclass.svg)](https://david-dm.org/overlookmotel/jest-expect-subclass)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/jest-expect-subclass.svg)](https://david-dm.org/overlookmotel/jest-expect-subclass)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/jest-expect-subclass.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/jest-expect-subclass/master.svg)](https://coveralls.io/r/overlookmotel/jest-expect-subclass)

# Jest expect matchers for subclasses

## What's it for?

Adds matchers to Jest `expect()` for whether one thing is a subclass of another or not.

* `.toBeSubclassOf()`
* `.toBeDirectSubclassOf()`

## Usage

Require this package in your tests.

Or add to your Jest config file:

```js
{
  /* ... rest of config ... */
  setupFilesAfterEnv: ['jest-expect-subclass']
}
```

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v10+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/jest-expect-subclass/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/jest-expect-subclass/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
