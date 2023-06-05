export default class Form {
  static initialize = (bookCollection) => {
    // Handle form submission
    document.getElementById('bookForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('title');
      const authorInput = document.getElementById('author');
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();

      if (title && author) {
        bookCollection.addBook(title, author);
        titleInput.value = '';
        authorInput.value = '';
      }
    });
  };
}
