import React from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Book from "./components/Book/Book";
import Books from "./assets/books";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(event) {
    const dupa = this.state.books.findIndex(
      el => el.name === event.target.name
    );
    console.log(dupa);

    let books = [...this.state.books];
    console.log(books);
    books[dupa]["read"] = !books[dupa]["read"];
    console.log(books);
    this.setState({ books });
    console.log(this.state);
  };

  render() {
    let books = [...this.state.books];
    books = books.map(book => {
      return (
        <Book
          key={book.name}
          name={book.name}
          description={book.description}
          read={book.read}
          onChange={this.handleClick.bind(this)}
        />
      );
    });

    return (
      <div className="App">
        <UserInput />
        {books}
      </div>
    );
  }
}

export default App;
