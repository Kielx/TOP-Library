import React from "react";
import "./App.css";
import Book from "./components/Book/Book";
import Books from "./assets/books";
import Dialog from "./components/dialog/Dialog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      newBookName: "",
      newBookDescription: "",
      newBookRead: false,
      sameName: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBookAdd = this.handleBookAdd.bind(this);
  }

  handleClick = function (event) {
    const temp = this.state.books.findIndex(
      (el) => el.name === event.target.name
    );
    let books = [...this.state.books];
    books[temp]["read"] = !books[temp]["read"];
    this.setState({ books });
  };

  handleBookAdd = function (event) {
    let tempBooks = [];
    let temp = this.state.newBookRead;
    if (event.target.name === "newBookRead") {
      return this.setState({
        newBookRead: !temp,
      });
    } else if (event.currentTarget.name === "newBookSend") {
      event.preventDefault();

      tempBooks = [...this.state.books];
      tempBooks.push({
        name: this.state.newBookName,
        description: this.state.newBookDescription,
        read: this.state.newBookRead,
      });

      if (
        this.state.books.findIndex((el) => el.name === this.state.newBookName) >
        0
      ) {
        this.setState({ sameName: true });
        return (
          this.setState({ sameName: true }),
          alert("The book name already exists")
        );
      } else {
        return this.setState({
          books: tempBooks,
          newBookName: "",
          newBookDescription: "",
          newBookRead: false,
          sameName: false,
        });
      }
    } else {
      return this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  render() {
    let books = [...this.state.books];
    books = books.map((book) => {
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
        <Dialog
          change={this.handleBookAdd}
          name={this.state.newBookName}
          read={this.state.newBookRead}
          description={this.state.newBookDescription}
          sameName={this.state.sameName}
        ></Dialog>
        {books}
      </div>
    );
  }
}

export default App;
