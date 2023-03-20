const USD = new (function USD() {});
const BRL = new (function BRL() {});
const JPY = new (function JPY() {});

function eq(b) {
  return this == b;
}

USD.equals = eq;
BRL.equals = eq;
JPY.equals = eq;

module.exports = {
  USD, BRL, JPY
};
