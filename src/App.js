import React from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Book from "./components/Book/Book";
import Books from "./assets/books";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      newBookName: "",
      newBookDescription: "",
      newBookRead: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBookAdd = this.handleBookAdd.bind(this);
  }

  handleClick = function(event) {
    const temp = this.state.books.findIndex(
      el => el.name === event.target.name
    );
    let books = [...this.state.books];
    books[temp]["read"] = !books[temp]["read"];
    this.setState({ books });
  };

  handleBookAdd = function(event) {
    let tempBooks = [];
    let temp = this.state.newBookRead;
    if (event.target.name === "newBookRead") {
      return this.setState({
        newBookRead: !temp
      });
    } else if (event.target.name === "newBookSend") {
      event.preventDefault();

      tempBooks = [...this.state.books];
      tempBooks.push({
        name: this.state.newBookName,
        description: this.state.newBookDescription,
        read: this.state.newBookRead
      });
      if (
        this.state.books.findIndex(el => el.name === this.state.newBookName) > 0
      ) {
        return alert("The book name already exists");
      }
      return this.setState({
        books: tempBooks
      });
    } else {
      return this.setState({
        [event.target.name]: event.target.value
      });
    }
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
        <UserInput
          name={this.state.newBookName}
          description={this.state.newBookDescription}
          read={this.state.newBookRead}
          change={this.handleBookAdd}
        />
        {books}
      </div>
    );
  }
}

export default App;
