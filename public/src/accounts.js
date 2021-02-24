// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  const match = accounts.find((acct) => acct.id === id);
  return match;
}

function sortAccountsByLastName(accounts) {
  const array = [];
  for (let i in accounts) {
    array.push(accounts[i]);
  }
  const result = array.sort((acctA, acctB) => 
    acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase() ? 1 : -1 );
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  const borrowsArray = books.map((book) => {
    const {borrows} = book;
    return borrows;
  });
  const filterId = borrowsArray.flat().filter((borrow) => borrow.id === account.id);  
  return filterId.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let results = [];
  for (let i in books) {
    for (let j in books[i].borrows) {
      if (books[i].borrows[j].id === account.id && books[i].borrows[j].returned === false) {
      let authorAdd = addAuthor(books[i].authorId, authors);
      books[i].author = authorAdd;
      results.push(books[i]);
      }
    }
  }
  return results;
}
function addAuthor(authorId, authors) {
  return authors.find((auth) => auth.id === authorId);
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
