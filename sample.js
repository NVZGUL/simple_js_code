// This program is simple implementation of Amicable numbers finding problem
const assert = require('assert');

// Array doesn't have the sum() method and this simple implementation of it
Array.prototype.sum = function(){
	return this.reduce((a,b) => a +b, 0); 
}

/**
 * Represents a sum of dividers.
 * @constructor
 * @param {int} value - The title of the book.
 */
const sum_of_dev = (value) => 
	Array.from(Array(value).keys())
		.filter(x => x != 0)
		.filter(x => value % x === 0)
		.sum()

/**
 * Represents a Amicable numbers algorithm.
 * @constructor
 * @param {int} a - The number.
 * @param {int} b - The number.
 */
const friendly_nums = (a, b) => a === sum_of_dev(b) && b === sum_of_dev(a);

assert.equal(friendly_nums(220, 284), true)
assert.equal(friendly_nums(87, 56), false)