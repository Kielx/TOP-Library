import React from "react";
import styles from "./Book.module.css";

const Book = props => {
  return (
    <div className={styles.book}>
      <h3>Book name</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
        interdum ipsum. Nulla sit amet dui egestas, mattis magna sed, porta
        elit. Suspendisse a nisl ultrices, mattis est nec, tincidunt neque. Nunc
        eu sollicitudin nulla. Sed felis diam, ultricies non vehicula sit amet,
        blandit quis dui. Proin vehicula maximus enim. Pellentesque malesuada
        pellentesque convallis. Aenean orci quam, condimentum eu auctor quis,
        sollicitudin id orci. Etiam non cursus tortor, ut aliquam justo. In
        feugiat purus in mattis ultrices. Vivamus tempus aliquam erat, eu cursus
        massa sodales vitae. Proin lorem elit, aliquet ac velit at, elementum
        congue nisi. Maecenas viverra magna quis dui bibendum bibendum.
      </p>
    </div>
  );
};

export default Book;
