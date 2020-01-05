'use strict';

const phonebook = [
  { name: 'P', phone: '+38050227' },
  { name: 'S', phone: '+38099642' },
  { name: 'M', phone: '+380502271' },
  { name: 'B', phone: '+380502265' }
];

const findPhoneByName = name => {
  for (const key of phonebook) {
    if (name === key.name) return key.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
