import React from "react";
import styles from "./Book.module.css";
import classNames from "classnames";

const Book = props => {
  let cname = "";
  if (props.read) {
    cname = "read";
  } else {
    cname = "unread";
  }
  return (
    <div className={classNames(styles["book"])}>
      <h3 className={classNames(styles[cname])}>{props.name}</h3>
      <form className={classNames(styles[cname], styles["forms"])}>
        <label>Read?</label>
        <input
          type="checkbox"
          checked={props.read}
          name={props.name}
          onChange={props.onChange}
        />
      </form>

      <p>{props.description}</p>
    </div>
  );
};

export default Book;
