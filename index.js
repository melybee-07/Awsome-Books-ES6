/* global luxon */
import Book from './modules/book.js';
import Navigation from './modules/navigation.js';
import Form from './modules/form.js';

// eslint-disable-next-line no-unused-vars
const bookCollection = new Book();

// Initialize modules
Navigation.initialize(bookCollection);
Form.initialize(bookCollection);

// Render initial content
bookCollection.renderBookList();

// Display current date and time
const displayDateTime = () => {
  const dateTimeElement = document.getElementById('dateTime');
  dateTimeElement.textContent = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_FULL,
  );
};

setInterval(displayDateTime, 1000);
displayDateTime();
