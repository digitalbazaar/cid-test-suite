<!--
Copyright 2024 Digital Bazaar, Inc.

SPDX-License-Identifier: LicenseRef-w3c-3-clause-bsd-license-2008 OR LicenseRef-w3c-test-suite-license-2023
-->

# Controlled Identifiers (CIDs) v1.0 Test Suite

This is the test suite for the W3C Controlled Identifiers (CIDs) v1.0
specification.

## Table of Contents

<!-- TOC tocDepth:2..3 -->

- [Background](#background)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
  - [Testing Locally](#testing-locally)
- [Implementation](#implementation)
- [Contribute](#contribute)
- [License](#license)

<!-- /TOC -->

## Background

This test suite provides conformity tests for identifiers that support the
[W3C Controlled Identifiers (CIDs) v1.0](https://www.w3.org/TR/cid/).

## Install

```js
npm i
```

## Setup

Have a W3C Controlled Identifiers (CIDs) v1.0 document available on the web. The test-suite will do a GET request on the provided endpoint and assert the response.

## Usage

```sh
npm test
```

### Testing Locally

To test a single implementation or endpoint running locally, you can
copy `localConfig.example.cjs` to `localConfig.cjs`
in the root directory of the test suite.

```bash
cp localConfig.example.cjs localConfig.cjs
```

This file must be a CommonJS module that exports an object containing a
`settings` object (for configuring the test suite code itself) and an
`implementations` array (for configuring the implementation(s) to test against).

The format of the object contained in the `implementations` array is
identical to the one defined in
[the **_Testing locally_** section of VC Test Suite Implementations](https://github.com/w3c/vc-test-suite-implementations?tab=readme-ov-file#testing-locally).
The `implementations` array may contain more than one implementation object,
enabling you to test multiple implementations in one run.

```js
// localConfig.cjs defines local implementations
module.exports = {
  implementations: [{
    name: 'My Company',
    implementation: 'My Implementation Name',
    identifiers: [{
      id: 'https://example.com',
      endpoint: 'https://example.com',
      tags: ['cid']
    }]
  }];
```

## Implementation

To add your implementation to this test suite, add a test manifest describing
your implementation to the
[`w3c/vc-test-suite-implementations`](https://github.com/w3c/vc-test-suite-implementations)
repo by following the
[Adding a new implementation](https://github.com/w3c/vc-test-suite-implementations/tree/main?tab=readme-ov-file#adding-a-new-implementation)
instructions.

All endpoints will need the tag `cid`. A simplified manifest will roughly
look like the following:

```js
{
  "name": "My Company",
  "implementation": "My implementation",
  "identifiers": [{
    "id": "https://example.com",
    "endpoint": "https://example.com",
    "tags": ["cid"]
  }]
}
```

The endpoint should return the CID, and the `id` value of the implementation should match the base identifier of the document.

See
[Adding a new implementation](https://github.com/w3c/vc-test-suite-implementations/tree/main?tab=readme-ov-file#adding-a-new-implementation)
for more information.

## Contribute

See [the CONTRIBUTING.md file in the `w3c/vc-test-suite-implementations` repo](https://github.com/w3c/vc-test-suite-implementations/blob/main/CONTRIBUTING.md).

Pull Requests are welcome!

## License

See [the LICENSE.md file](LICENSE.md)
