// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  const result = authors.find((auth) => auth.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let results = [];
  let takenOut = [];
  let returned = [];
  for (let i in books) {
    books[i].borrows[0].returned === false ? takenOut.push(books[i]) : returned.push(books[i]);  
  }
  results.push(takenOut, returned);
  return results;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let index = 0;
  
  for (let i = 0; i < book.borrows.length; i++) {
    const bookId = book.borrows[i].id;
    let acctAdd = addAcct(accounts, bookId);
    acctAdd.returned = book.borrows[i].returned;
    result.push(acctAdd);
  }
  return result.slice(0, 10);
}

function addAcct(accounts, bookId) {
  return accounts.find((acct) => acct.id === bookId);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
