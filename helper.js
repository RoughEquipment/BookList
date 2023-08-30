// Flatten object values into an array, including nested objects
const flattenObjectValuesIntoArray = (arrOfObjs) => {
  let flattenedObjsArr = [];
  for (let obj of arrOfObjs) {
    const objValues = Object.values(obj).map(value => {
      if (typeof value === 'object' && value !== null) {
        return flattenObjectValuesIntoArray([value]);
      }
      return String(value).toLowerCase();
    });
    flattenedObjsArr = flattenedObjsArr.concat(...objValues);
  }
  return flattenedObjsArr;
};

// Structure individual books as HTML
const structureBookAsHtml = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "bookDiv");

  const bookTitle = document.createElement("h2");
  bookTitle.innerHTML = book.title;
  bookTitle.setAttribute("class", "bookTitle");

  const colorElement = document.createElement("span");
  colorElement.textContent = `Color: ${book.color}`; // Assuming 'color' property exists

  const bookAuthor = document.createElement("h3");
  bookAuthor.innerHTML = book.author;

  const bookTags = document.createElement("p");
  bookTags.innerHTML = book.tags.join(", ");

  bookDiv.append(bookTitle, colorElement, bookAuthor, bookTags);

  return bookDiv;
};

// Structure filtered books as HTML array
const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map((book) => structureBookAsHtml(book));
};

const renderBooksToDom = (elements) => {
  const bookListContainer = document.querySelector("#bookList");
  bookListContainer.innerHTML = "";

  bookListContainer.append(...elements);
};

// Rest of your code...
