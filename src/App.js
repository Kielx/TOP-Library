import React from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Book from "./components/Book/Book";
import books from "./assets/books";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books
    };
  }
  render() {
    const books = this.state.books.map(function(book) {
      return (
        <Book
          name={book.name}
          description={book.description}
          read={book.read}
        />
      );
    });

    return (
      <div className="App">
        <UserInput />
        {books}
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
