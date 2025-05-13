# Changelog

## [3.0.0](https://github.com/sarodz/out-of-character/compare/out-of-character-v2.0.1...out-of-character-v3.0.0) (2025-05-13)


### ⚠ BREAKING CHANGES

* minimum node version bumped from 6 to 20

### Features

* add a basic config generator and viewer ([9ee80b8](https://github.com/sarodz/out-of-character/commit/9ee80b875d4ba9d23da0ec56442fce1ee5cffa5d))
* add better codes lookup data ([0944627](https://github.com/sarodz/out-of-character/commit/0944627e798c087947007065bd123fac6ac3d612))
* finalise the replacement config ([cfbfbdf](https://github.com/sarodz/out-of-character/commit/cfbfbdfc7449e8b6a97b1fadf3571f2155b2ad54))
* **getFiles:** Add recursive search capability ([3999096](https://github.com/sarodz/out-of-character/commit/39990961ef8f59026624e14f9095bc596741f2b7))
* **viewer:** improve table output ([660d448](https://github.com/sarodz/out-of-character/commit/660d4489b5832c39dd4d5d911c3d945ed3d0110d))
* working visualise and unicode parsing ([38c4716](https://github.com/sarodz/out-of-character/commit/38c47168c6f81845ccaa3e6d8b2c41371f17bd8e))


### Bug Fixes

* cleaned column for empty replaceWith ([7127f17](https://github.com/sarodz/out-of-character/commit/7127f17cd9907ab614f8220efe7e417f8635cbe9))
* cleaned column on viewer ([d625a43](https://github.com/sarodz/out-of-character/commit/d625a434598abdb2846451f75aced4097d5adadb))
* **data:** add nbsp to character lists ([3b912da](https://github.com/sarodz/out-of-character/commit/3b912daa2d7e83c4c972724760a926e503170b02))
* **data:** add nbsp to character lists ([777f083](https://github.com/sarodz/out-of-character/commit/777f083b1876b2b8ef09a163205a52aa0c589813))
* html entities partially working ([2dfea94](https://github.com/sarodz/out-of-character/commit/2dfea9404dd16b17c3723c8fe5cd9dde1f6da1ff))
* improve html entities ([8b9c1e2](https://github.com/sarodz/out-of-character/commit/8b9c1e221e0d0fc800516e71aa6c9527fc765c0b))


### Performance Improvements

* add missing `'use strict'` directives ([#10](https://github.com/sarodz/out-of-character/issues/10)) ([046552c](https://github.com/sarodz/out-of-character/commit/046552c7308f7073a0f539197793e71ed39129ac))
* avoid expensive looped regex creation ([f496b68](https://github.com/sarodz/out-of-character/commit/f496b68f677283b66172f295fb1af685d17c46b3))
* cache regex ([20b3793](https://github.com/sarodz/out-of-character/commit/20b37938dd3da1e1680d05d41b4485447878b284))
* **data:** add missing `aka` properties ([#13](https://github.com/sarodz/out-of-character/issues/13)) ([cb05c12](https://github.com/sarodz/out-of-character/commit/cb05c12eae2e7ef6e06737a3aeb19f77226ccc48))
* **index:** use `for` loop over `for...of` loop ([#25](https://github.com/sarodz/out-of-character/issues/25)) ([d03ce66](https://github.com/sarodz/out-of-character/commit/d03ce663134f9b31c3ca68334a60e59e2da8c6ba))
* **src/match:** use regex unicode `u` flag ([#23](https://github.com/sarodz/out-of-character/issues/23)) ([bb19f26](https://github.com/sarodz/out-of-character/commit/bb19f2601f765be282a2758a92b0b410795fab7b))
* use iterative loops over functional ones ([424862f](https://github.com/sarodz/out-of-character/commit/424862f2b6bbf9126c66774f3693d032f1ddfd14))


### Build System

* remove babel ([#22](https://github.com/sarodz/out-of-character/issues/22)) ([1aa340c](https://github.com/sarodz/out-of-character/commit/1aa340c218221643133eb5dad3f3dcba9dd314fd))

## [2.0.1]
- performance improvements

## [2.0.0]
- **BREAKING CHANGE**: dropped support for Node <=18
- removed Babel to get rid of inefficient polyfills
- performance improvements

## [1.2.4]
- performance improvements

## [1.2.3]
- update deps
- cosmetic changes
- performance improvements

## [1.2.2]
- fix/nbsp
- cosmetic changes
- update deps

## [1.2.1]

- typescript fix
- update deps

## [1.1.0]

- allow invisible characters in emojis

## [1.0.0]

- support testing a directory of files
- require --replace flag before making any edits

## [0.0.1]

-woop woop
