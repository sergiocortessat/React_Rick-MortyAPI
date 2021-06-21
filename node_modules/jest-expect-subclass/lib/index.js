/* --------------------
 * jest-expect-subclass module
 * ------------------*/

/* global expect */

'use strict';

// Modules
const assert = require('assert'),
	{printReceived, printExpected} = require('jest-matcher-utils'),
	{isFunction} = require('is-it-type');

// Extend `expect`

const {getPrototypeOf} = Object;
expect.extend({
	toBeSubclassOf(received, klass) {
		assert(isFunction(klass), 'expect.toBeSubclassOf() must be passed a function');

		const pass = received != null
			&& !!received.prototype
			&& received.prototype instanceof klass;

		return {
			message: () => `expected ${printReceived(received)}${pass ? ' not' : ''} to be subclass of ${printExpected(klass)}`,
			pass
		};
	},

	toBeDirectSubclassOf(received, klass) {
		assert(isFunction(klass), 'expect.toBeDirectSubclassOf() must be passed a function');

		const pass = received != null
			&& getPrototypeOf(received) === klass
			&& getPrototypeOf(received.prototype) === klass.prototype;

		return {
			message: () => `expected ${printReceived(received)}${pass ? ' not' : ''} to be direct subclass of ${printExpected(klass)}`,
			pass
		};
	}
});
