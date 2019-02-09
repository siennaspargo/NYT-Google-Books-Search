// front end api calls to database and google books API

import axios from "axios";

export default {
// call to google books API
  getBookTitle: function(searchedTitle) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchedTitle);
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
