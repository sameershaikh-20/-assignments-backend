let library = {
  books: [],

  addBook: function (title, author, isbn) {
    let newBook = {
      title: title,
      author: author,
      isbn: isbn,
      isAvailable: true
    };
    this.books.push(newBook);
    console.log("Book added: " + title);
  },

  borrowBook: function (isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (!book) {
      console.log("Book with ISBN " + isbn + " not found.");
      return;
    }

    if (book.isAvailable) {
      book.isAvailable = false;
      console.log("You have borrowed: " + book.title);
    } else {
      console.log("Sorry, " + book.title + " is already borrowed.");
    }
  },

  returnBook: function (isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (!book) {
      console.log("Book with ISBN " + isbn + " not found.");
      return;
    }

    if (!book.isAvailable) {
      book.isAvailable = true;
      console.log("You have returned: " + book.title);
    } else {
      console.log(book.title + " was not borrowed.");
    }
  },

  displayBooks: function () {
    console.log("\n--- List of Books ---");
    this.books.forEach((book) => {
      const status = book.isAvailable ? "Available" : "Not Available";
      console.log(book.title + " by " + book.author + " (ISBN: " + book.isbn + ") - " + status);
    });
    console.log("---------------------\n");
  }
};

library.addBook("The Alchemist", "Paulo Coelho", "101");
library.addBook("Atomic Habits", "James Clear", "102");
library.addBook("Harry Potter", "J.K. Rowling", "103");

library.displayBooks();

library.borrowBook("101");

library.borrowBook("101");

library.displayBooks();

library.returnBook("101");

library.displayBooks();
