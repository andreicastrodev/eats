import React from "react";
import { useSelector } from "react-redux";
import styles from "./Results.module.css";
const Results = () => {
  const image = require("../../misc/img/pasta.jpg").default;
  const results = useSelector((state) => state.recipe.search.results);

  console.log(results);
  return (
    <ul className={styles.results}>
      <li>
        {results.map((result) => (
          <a
            href={`#${result.recipe_id}`}
            className={styles.resultsBox}
            key={result.recipe_id}
          >
            <figure className={styles.resultsFig}>
              <img
                className={styles.resultsImg}
                src={result.image_url}
                alt=""
              />
            </figure>
            <div className={styles.resultsInfo}>
              <p className={styles.resultsTitle}>{result.title}</p>
              <span className={styles.resultsCook}>{result.publisher}</span>
            </div>
          </a>
        ))}
      </li>
    </ul>
  );
};

export default Results;
