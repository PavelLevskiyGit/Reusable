'use strict';

const phonebook = {
  'P': '+3805022',
  'S': '+380996423',
  'M': '+38050227',
  'B': '+380502286',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
