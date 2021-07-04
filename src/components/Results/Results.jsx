import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Results.module.css";
import { fetchRecipe } from "../../store/actions";
const Results = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.recipe.search.results);

  const onHashChangeHandler = () => {
    setTimeout(function () {
      dispatch(fetchRecipe());
    }, 10);
  };
  return (
    <ul className={styles.results}>
      <li onClick={onHashChangeHandler}>
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
              <p className={styles.resultsTitle}>
                {result.title.substring(0, 20) + "....."}
              </p>
              <span className={styles.resultsCook}>{result.publisher}</span>
            </div>
          </a>
        ))}
      </li>
    </ul>
  );
};

export default Results;
