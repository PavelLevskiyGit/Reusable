'use strict';

const phonebook = {
  'Mar Aurelius': '+38044555443',
  'Marc Aurelius': '+3804455544',
  'Marcu Aurelius': '+380445554'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
