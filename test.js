const { USD, BRL, JPY } = require('./eeo.js');
const assert = require('assert');

[
  [
    'define equality for types',
    () => {
      [
	[USD, [BRL, JPY]],
	[BRL, [USD, JPY]],
	[JPY, [USD, BRL]],
      ].forEach(([equal, notEquals]) => {
	assert.strictEqual(equal.equals(equal), true);
	notEquals.forEach(notEqual => {
	  assert.strictEqual(equal.equals(notEqual), false);
	});
      });
    }
  ],
].forEach(
  ([title, work]) => {
    console.log(title);
    work();
  }
)
