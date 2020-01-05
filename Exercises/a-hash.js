'use strict';

const phonebook = {
  'Pasha': '+380502275754',
  'Sasha': '+380996423678',
  'Mama': '+380502275754',
  'Batya': '+380502283221',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
