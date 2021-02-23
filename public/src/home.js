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
  let result = [];
  let genres = [];
  
  for (let i in books) { //creates array of genres; working fine
    genres.push(books[i].genre);   
  }
  for (let j = 0; j < genres.length; j++) {
    let tempOb = {name: "", count: 0};
    let check = 0;
    tempOb.name = genres[j];
    tempOb.count = getCount(genres, genres[j]); //this working fine to get count of each genre
    const match = result.find((check) => JSON.stringify(check) === JSON.stringify(tempOb));
    if (match === undefined) result.push(tempOb);
  }
  console.log(result);
  result.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return result.slice(0, 5);
}
function getCount(genres, genre) {
  let arr = [];
  for (let i in genres) {
    if (genres[i] === genre) arr.push(genre);
  }
  return arr.length;
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
    console.log(tempOb);
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
