'use strict';

const userLogin = require('..');
const assert = require('assert').strict;

assert.strictEqual(userLogin(), 'Hello from userLogin');
console.info("userLogin tests passed");
