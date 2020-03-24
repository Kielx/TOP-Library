import React from "react";
import styles from "./Book.module.css";

const Book = props => {
  return (
    <div className={styles.book}>
      <h3>{props.name}</h3>
      <input type="checkbox" checked={props.read} />
      <p>{props.description}</p>
    </div>
  );
};

export default Book;
