'use strict';

const phonebook = [
  { name: 'Pasha', phone: '+380502275754' },
  { name: 'Sasha', phone: '+380996423678' },
  { name: 'Mama', phone: '+380502271374' },
  { name: 'Batya', phone: '+380502283221' }
];

const findPhoneByName = name => {
  for (const key of phonebook) {
    if (name === key.name) return key.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
