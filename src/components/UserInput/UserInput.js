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
          <input
            name="newBookName"
            type="text"
            value={this.props.newBookName}
            onChange={this.props.change}
          />
          <br />
          <input
            name="newBookDescription"
            type="text"
            value={this.props.newBookDescription}
            onChange={this.props.change}
          />
          <input
            name="newBookRead"
            type="Checkbox"
            checked={this.props.newBookRead}
            onChange={this.props.change}
          />
          <br />
          <input
            name="newBookSend"
            type="submit"
            value="Send"
            onClick={this.props.change}
          />
        </label>
      </form>
    );
  }
}

export default UserInput;
