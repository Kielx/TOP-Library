import React from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Book from "./components/Book/Book";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: "1st book",
          description: "1st book description",
          read: true
        },
        {
          name: "2nd book",
          description: "2nd book description",
          read: false
        },
        {
          name: "3rd book",
          description: "3rd book description",
          read: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <UserInput />
        <Book />
        <Book />
        <Book />
      </div>
    );
  }
}

export default App;
