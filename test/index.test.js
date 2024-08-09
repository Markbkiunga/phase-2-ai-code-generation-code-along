require('./helpers.js');

const { expect } = require('chai');

// Your tests here
describe('filterBooksByGenre', function () {
  it('should return an array', function () {
    const result = filterBooksByGenre('Fiction', []);
    expect(result).to.be.an('array');
  });

  it('should return an empty array if no books match the genre', function () {
    const books = [
      { title: 'Book 1', author: 'Author A', genre: 'Non-Fiction' },
      { title: 'Book 2', author: 'Author B', genre: 'Fantasy' },
    ];
    const result = filterBooksByGenre('Science Fiction', books);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return all books that match the specified genre', function () {
    const books = [
      { title: 'Book 1', author: 'Author A', genre: 'Fiction' },
      { title: 'Book 2', author: 'Author B', genre: 'Fiction' },
      { title: 'Book 3', author: 'Author C', genre: 'Fantasy' },
    ];
    const result = filterBooksByGenre('Fiction', books);
    expect(result).to.have.lengthOf(2);
    expect(result).to.deep.include({
      title: 'Book 1',
      author: 'Author A',
      genre: 'Fiction',
    });
    expect(result).to.deep.include({
      title: 'Book 2',
      author: 'Author B',
      genre: 'Fiction',
    });
  });

  it('should return an empty array if the books array is empty', function () {
    const result = filterBooksByGenre('Fiction', []);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return an empty array if the genre is an empty string', function () {
    const books = [
      { title: 'Book 1', author: 'Author A', genre: 'Fiction' },
      { title: 'Book 2', author: 'Author B', genre: 'Fiction' },
    ];
    const result = filterBooksByGenre('', books);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should be case-sensitive when matching genres', function () {
    const books = [
      { title: 'Book 1', author: 'Author A', genre: 'Fiction' },
      { title: 'Book 2', author: 'Author B', genre: 'fiction' },
    ];
    const result = filterBooksByGenre('Fiction', books);
    expect(result).to.have.lengthOf(1);
    expect(result).to.deep.include({
      title: 'Book 1',
      author: 'Author A',
      genre: 'Fiction',
    });
  });

  it('should not modify the original books array', function () {
    const books = [
      { title: 'Book 1', author: 'Author A', genre: 'Fiction' },
      { title: 'Book 2', author: 'Author B', genre: 'Fantasy' },
    ];
    const booksCopy = [...books];
    filterBooksByGenre('Fiction', books);
    expect(books).to.deep.equal(booksCopy);
  });
});
