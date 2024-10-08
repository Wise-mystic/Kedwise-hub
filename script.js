 // Fetch data from the Open Library API
async function fetchBooks() {
    try {
        const response = await fetch('https://openlibrary.org/subjects/love.json'); // Use https instead of http
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

        // Create elements for book cover, title, and author
        const bookCover = document.createElement('img');

        // Check if a cover ID exists and construct the URL if it does
        if (book.cover_id) {
            bookCover.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`; // Medium cover
        } else {
            bookCover.src = ''; // Placeholder or no image if not available
        }

        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;

        const authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author';
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = authors;

        // Append details to the item
        bookDetails.appendChild(bookTitle);
        bookDetails.appendChild(bookAuthor);

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
