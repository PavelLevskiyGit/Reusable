'use strict';

const fn = () => {
  const obj1 = { name: 'Pavel' };
  let obj2 = { name: 'Pavel' };
  obj1.name = 'Sasha';
  obj2.name = 'Sasha';
  // obj1 = { text: 'test' };
  obj2 = { text: 'test' };
};

module.exports = { fn };
