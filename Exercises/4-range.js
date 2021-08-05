'use strict';

const range = (startNumber, endNumber) => {
  const arr = [];
  for (let i = startNumber; i <= endNumber; i++) arr.push(i);
  return arr;
};

module.exports = { range };
