const USD = new (function USD() {});
const BRL = new (function BRL() {});
const JPY = new (function JPY() {});

function eq(b) {
  return this == b;
}

USD.equals = eq;
BRL.equals = eq;
JPY.equals = eq;

USD.toEnum = () => 0;
BRL.toEnum = () => 1;
JPY.toEnum = () => 2;

function orderCurrency(b) {
  return this.toEnum() > b.toEnum();
}

USD.lte = orderCurrency;
BRL.lte = orderCurrency;
JPY.lte = orderCurrency;

const Currency = {
  fromEnum(x) {
    switch(x) {
    case 0: return USD;
    case 1: return BRL;
    case 2: return JPY;
    default: { throw new Error(`no currency for ${x}.`); }
    }
  }
};

module.exports = {
  Currency, USD, BRL, JPY
};
