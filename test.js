const { Currency, USD, BRL, JPY } = require('./eeo.js');
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
  [
    'define enumeration for types',
    () => {
      [USD, BRL, JPY].forEach(currency => {
	assert.strictEqual(Currency.fromEnum(currency.toEnum()), currency);
      });
    }
  ],
  [
    'define ordering for types',
    () => {
      [
	[USD, [], [BRL, JPY]],
	[BRL, [USD], [JPY]],
	[JPY, [USD, BRL], []],
      ].forEach(([currency, greaters, smallers]) => {
	greaters.forEach(
	  greater => assert.strictEqual(currency.lte(greater), true)
	);

	smallers.forEach(
	  smaller => assert.strictEqual(currency.lte(smaller), false)
	);
      });
    }
  ]
].forEach(
  ([title, work]) => {
    console.log(title);
    work();
  }
)
