import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveBook: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
