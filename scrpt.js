// Helper function to capture search value
const captureSearchValue = () => {
  const searchBar = document.querySelector("#search-bar");
  return searchBar.value.toLowerCase();
};

// Filter books based on search input
const filterBooks = (searchValue, books) => {
  const lowerSearchValue = searchValue.toLowerCase(); // Convert search value to lowercase
  return books.filter((book) => {
    const flattenedBookValues = flattenObjectValuesIntoArray([book]);
    return flattenedBookValues.some((value) =>
      value.includes(lowerSearchValue)
    );
  });
};

// Handler triggered when a user clicks the "Search" button.
const searchBtnClickHandler = () => {
  const searchValue = captureSearchValue();

  const matchingBooks = filterBooks(searchValue, books);
  const formattedBookElements = structureBooksAsHtml(matchingBooks);

  renderBooksToDom(formattedBookElements); // Render books to DOM

  // After rendering the books, check the child element count for each book title div
  const bookTitleDivs = document.querySelectorAll(".bookTitle");
  bookTitleDivs.forEach((bookTitleDiv) => {
    if (bookTitleDiv.childElementCount !== 6) {
      console.log(
        `Expected 6 child elements, but found ${bookTitleDiv.childElementCount}`
      );
    }
  });
};

// Attach an event listener to the search button
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", searchBtnClickHandler);

// Attach event listener to the search input for Enter key press
const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtnClickHandler();
  }
});
