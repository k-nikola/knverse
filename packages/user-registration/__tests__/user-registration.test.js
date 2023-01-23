'use strict';

const userRegistration = require('..');
const assert = require('assert').strict;

assert.strictEqual(userRegistration(), 'Hello from userRegistration');
console.info("userRegistration tests passed");
