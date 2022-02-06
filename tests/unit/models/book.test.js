const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers');
  
  const BookModel = require('../../../src/models/book');
  
  describe('O model de Book', () => {
    const Book = BookModel(sequelize, dataTypes);
    const book = new Book();
  
    describe('possui o nome "Book"', () => {
      checkModelName(Book)('Book');
    });
  
    describe('possui as propriedades "name" e "description"', () => {
      ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
    });
  });