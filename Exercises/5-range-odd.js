'use strict';

const rangeOdd = (startNumber, endNumber) => {
  const arr = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
