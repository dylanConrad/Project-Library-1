// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return Object.keys(books).length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let i in books) {
    if (books[i].borrows[0].returned === false) result++;
  }
  return result;
}

function getMostCommonGenres(books) { 
  const genreArr = books.reduce((result, book) => {
    result.push(book.genre);
    return result;
  }, []);
  const finalResult = getResult(genreArr);
  finalResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return finalResult.slice(0, 5);
}

function getResult(genreArr) {
  let finalResult = [];
  for (let i = 0; i < genreArr.length; i++) {
    const genres = genreArr.filter((genre) => genre === genreArr[i]);
    const tempOb = {name: genreArr[i], count: genres.length};
    const match = finalResult.find((check) => JSON.stringify(check) === JSON.stringify(tempOb));
    if (match === undefined) finalResult.push(tempOb);
  }
  return finalResult;
}
 
function getMostPopularBooks(books) { 
  let result = [];
  for (let i in books) {
    let object = {name: "", count: 0};
    object.name = books[i].title;
    object.count = books[i].borrows.length;
    result.push(object);
  }
  result.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1); 
  return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  for (let i in books) {
    let tempOb = {};
    let book = books[i];
    tempOb.name = getName(authors, book);
    tempOb.count = books[i].borrows.length;
    result.push(tempOb);
  }
  result.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1); 
  return result.slice(0, 5);
}

function getName(authors, book) {
  let name = "";
  for (let i in authors) {
    if (authors[i].id === book.authorId) name = `${authors[i].name.first} ${authors[i].name.last}`;
  }
  return name;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
