'use strict';

const phonebook = [
  { name: 'one', phone: '+123' },
  { name: 'two', phone: '+456' },
  { name: 'three', phone: '+789' }
];

const findPhoneByName = name => {
  for (const key of phonebook) {
    if (key.name === name) return phonebook.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
