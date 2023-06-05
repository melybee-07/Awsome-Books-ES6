import Book from "./modules/book.js";
import Navigation from "./modules/navigation.js";
import Form from "./modules/form.js";

const bookCollection = new Book();

// Initialize modules
Navigation.initialize(bookCollection);
Form.initialize(bookCollection);

// Render initial content
bookCollection.renderBookList();
