'use strict';

const fn = () => {
  const obj1 = { name: 'P' };
  let obj2 = { name: 'P' };
  obj1.name = 'S';
  obj2.name = 'S';
  // obj1 = { text: 'test' };
  obj2 = { text: 'test' };
};

module.exports = { fn };
