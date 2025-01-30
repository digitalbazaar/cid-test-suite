/*
 * Copyright 2022 - 2024 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: LicenseRef-w3c-3-clause-bsd-license-2008 OR LicenseRef-w3c-test-suite-license-2023
 */

import {
  addPerTestMetadata,
  resolveDocument,
  setupMatrix
} from './helpers.js';
import chai from 'chai';
import {createRequire} from 'module';
import {expect} from 'chai';
import {filterByTag} from 'vc-test-suite-implementations';

const require = createRequire(import.meta.url);

chai.use(require('chai-json-schema'));

const tag = 'cid';
const {match} = filterByTag({tags: [tag], property: 'identifiers'});
console.log(match);

describe('Json Schema Conformance', function() {
  setupMatrix.call(this, match);
  for(const [name, implementation] of match) {
    const {settings: {endpoint: documentEndpoint}} =
      implementation.identifiers?.find(
        identifier => identifier.tags.has(tag)) || null;
    const documentSchema = require('./fixtures/schema.json');
    let document;
    describe(name, function() {
      before(async function() {
        try {
          document = await resolveDocument(documentEndpoint);
        } catch(e) {
          console.error(
            `Couldn't resolve document.`,
            e
          );
        }

      });
      beforeEach(addPerTestMetadata);
      it('The resolved document is valid.',
        async function() {
          expect(document).to.be.jsonSchema(documentSchema);
        //   document.should.be.jsonSchema(documentSchema);
        });
    });
  }
});
