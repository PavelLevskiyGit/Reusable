'use strict';

const fn = () => {
  const obj1 = { name: 'Pavel' };
  let obj2 = { name: 'Pavel' };

  obj1.name = 'SecondName';
  obj2.name = 'SecondName';

  // obj1 = { test: 'test' }
  obj2 = { test: 'test' };
};

module.exports = { fn };
