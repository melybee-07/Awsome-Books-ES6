export default class Navigation {
  static initialize = (bookCollection) => {
    // Navigation links
    document.getElementById("booksLink").addEventListener("click", () => {
      document.getElementById("booksSection").style.display = "block";
      document.getElementById("addBookSection").style.display = "none";
      document.getElementById("contactSection").style.display = "none";
    });

    document.getElementById("addBookLink").addEventListener("click", () => {
      document.getElementById("booksSection").style.display = "none";
      document.getElementById("addBookSection").style.display = "block";
      document.getElementById("contactSection").style.display = "none";
    });

    document.getElementById("contactLink").addEventListener("click", () => {
      document.getElementById("booksSection").style.display = "none";
      document.getElementById("addBookSection").style.display = "none";
      document.getElementById("contactSection").style.display = "block";
    });
  };
}
