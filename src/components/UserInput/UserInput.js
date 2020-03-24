import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <form>
        <label>
          Add new book:
          <br />
          <input name="bookName" type="text" value="Name" />
          <br />
          <input name="bookDescription" type="text" value="Book Description" />
        </label>
        <br />
      </form>
    );
  }
}

export default UserInput;
