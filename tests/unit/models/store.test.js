const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers');
  
  const StoreModel = require('../../../src/models/store');
  
  describe('O model de Store', () => {
    const Store = StoreModel(sequelize, dataTypes);
    const store = new Store();
  
    describe('possui o nome "Store"', () => {
      checkModelName(Store)('Store');
    });
  
    describe('possui as propriedades "name" e "description"', () => {
      ['name', 'description'].forEach(checkPropertyExists(store));
    });
  });