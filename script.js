

// // document.addEventListener("DOMContentLoaded", function() {
// //     // Fetch books related to "love" when the page loads
// //     fetchBooks();

// //     // Function to fetch books from OpenLibrary API
// //     async function fetchBooks() {
// //         const apiUrl = 'http://openlibrary.org/subjects/love.json';
        
// //         try {
// //             // Fetch data from the API
// //             const response = await fetch(apiUrl);
// //             const data = await response.json();
// //             console.log()
// //             // Display books in the sidebar
// //             // displayBooks(data.works); 
// //             // console.log(data.works[0].
// //             //     ia_collection[0, 1, 2]               ) 
// //         } catch (error) {
// //             console.error('Error fetching books:', error);
// //         }
// //     }

// //     // Function to display the list of books in the sidebar
// //     function displayBooks(books) {
// //         // const bookList = document.getElementById("book-list");
// //         // const bookDisplay = document.getElementById("book-d");

// //         // Clear the book list before adding new content
// //         bookList.innerHTML = '';

// //         // Loop through each book and create a list item
// //         books.forEach(book => {
// //             const title = book.title;  // Get the book title
// //             const authors = book.authors.map(author => author.name).join(", ");  // Get the authors

// //             // Create a list item element (li) for each book
// //             const li = document.createElement('li');
// //             li.textContent = title;  // Set the book title as text content
// //             li.addEventListener('click', () => {
// //                 // Display details of the book when clicked
// //                 displayBookDetails(title, authors);
// //             });
// //             bookList.appendChild(li);  // Append the list item to the sidebar
// //         });
// //     }

// //     // Function to display book details in the main content area
// //     function displayBookDetails(title, authors, content) {
// //         const bookDisplay = document.getElementById("book-display");


// //         // Create a container for book details
// //         const bookItem = document.createElement('div');
// //         bookItem.classList.add('book-item');

// //         // Create an element for the book title
// //         const bookTitle = document.createElement('div');
// //         bookTitle.classList.add('book-title');
// //         bookTitle.textContent = title;  // Set the title content 

        
// //         // Create an element for the book content
// //         const bookContent = document.createElement('div');
// //         bookContent.classList.add('book-content');
// //         bookContent.textContent = content;  // Set the title content

// //         // Create an element for the book authors
// //         const bookAuthor = document.createElement('div');
// //         bookAuthor.classList.add('book-author');
// //         bookAuthor.textContent = `By: ${authors}`;  // Set the authors content

// //         // Append the title and author to the book item
// //         bookItem.appendChild(bookTitle);
// //         bookItem.appendChild(bookAuthor);
// //         bookItem.appendChild(bookContent);

// //         // Clear the previous book details and append the new book details
// //         bookDisplay.innerHTML = '';
// //         bookDisplay.appendChild(bookItem);
// //     }

// //     // Function to search for books by title
// //     window.searchBooks = function() {
// //         // Get the search term entered by the user
// //         const searchTerm = document.getElementById("search-bar").value.toLowerCase();
// //         const books = document.querySelectorAll('#book-list li');

// //         // Loop through each book in the list
// //         books.forEach(book => {
// //             const title = book.textContent.toLowerCase();  // Get the title in lowercase
// //             if (title.includes(searchTerm)) {
// //                 // Show the book if it matches the search term
// //                 book.style.display = "";
// //             } else {
// //                 // Hide the book if it doesn't match the search term
// //                 book.style.display = "none";
// //             }
// //         });
// //     };
// // });


// // Fetch data from the API
// async function fetchBooks() {
//     try {
//       const response = await fetch('http://openlibrary.org/subjects/love.json');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching books:', error);
//       return null;
//     }
//   }
  
//   // Display books in the book list
//   function displayBooks(books) {
//     const bookList = document.getElementById('bookList');
//     bookList.innerHTML = '';
  
//     books.forEach(book => {
//       const bookItem = document.createElement('div');
//       bookItem.classList.add('book-item');
  
//       const bookCover = document.createElement('img');
//       bookCover.src = book.coverImageUrl;
//       bookCover.alt = book.title;
  
//       const bookDetails = document.createElement('div');
//       bookDetails.classList.add('book-details');
  
//       const bookTitle = document.createElement('h3');
//       bookTitle.textContent = book.title;
  
//       const bookAuthor = document.createElement('p');
//       bookAuthor.textContent = book.author;
  
//       const bookDescription = document.createElement('p');
//       bookDescription.textContent = book.description;
  
//       bookDetails.appendChild(bookTitle);
//       bookDetails.appendChild(bookAuthor);
//       bookDetails.appendChild(bookDescription);
  
//       bookItem.appendChild(bookCover);
//       bookItem.appendChild(bookDetails);
  
//       bookList.appendChild(bookItem);
//     });
//   }
  
//   // Handle search form submission
//   document.getElementById('book-form').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const searchTerm = document.getElementById('book-search').value;
//     const books = await fetchBooks(searchTerm);
//     displayBooks(books);
//   });
  
//   // Fetch and display books on page load
//   document.addEventListener('DOMContentLoaded', async () => {
//     const books = await fetchBooks();
//     displayBooks(books);
//   });



// Fetch data from the Open Library API
async function fetchBooks() {
    try {
      const response = await fetch('http://openlibrary.org/subjects/love.json');
      const data = await response.json();
  
      // Check if the expected data structure is present
      if (data.works && Array.isArray(data.works)) {
        return data.works; // Return the array of works
      } else {
        console.error('No works found or works is not an array:', data);
        return []; // Return an empty array if no works are found
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      return []; // Return an empty array on error
    }
  }
  
  // Display books in the book list
  function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
  
    if (!Array.isArray(books)) {
      console.error('Expected an array but received:', books);
      return; // Exit if not an array
    }
  
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
  
      // Create elements for book cover, title, author, and description
      const bookCover = document.createElement('img');
      bookCover.src = book.cover ? book.cover.medium : ''; // Use medium cover image if available
    //   bookCover.alt = book.title;
  
      const bookDetails = document.createElement('div');
      bookDetails.classList.add('book-details');
  
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = book.title;
  
      const authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author';
      
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = authors;
  
    //   const bookDescription = document.createElement('p');
    //   bookDescription.textContent = book.first_sentence ? book.first_sentence : 'No description available';
  
      // Append details to the item
      bookDetails.appendChild(bookTitle);
      bookDetails.appendChild(bookAuthor);
    //   bookDetails.appendChild(bookDescription);
  
      // Append cover and details to the item
      bookItem.appendChild(bookCover);
      bookItem.appendChild(bookDetails);
  
      // Append item to the list
      bookList.appendChild(bookItem);
    });
  }
  
  // Fetch and display books on page load
  document.addEventListener('DOMContentLoaded', async () => {
    const books = await fetchBooks();
    displayBooks(books);
  });