import React from "react";
import { ReactComponent as TimeToCook } from "../../misc/svg/time.svg";
import { ReactComponent as ServingToCook } from "../../misc/svg/serving.svg";

import styles from "./Recipe.module.css";
import { useSelector } from "react-redux";
const Recipe = () => {
  const recipe = useSelector((state) => state.recipe.recipe);

  const newRecipe = {
    title: recipe.payload.title,
    publisher: recipe.payload.publisher,
    publisherUrl: recipe.payload.publisher_url,
    imageUrl: recipe.payload.image_url,
    recipeId: recipe.payload.recipe_id,
    socialRank: recipe.payload.social_rank,
    sourceUrl: recipe.payload.source_url,
    ingredients: recipe.payload.ingredients,
  };

  return (
    <div className={styles.recipe}>
      <img className={styles.recipeImg} src={newRecipe.imageUrl} alt="" />
      <div className={styles.recipeTitleBlock}>
        <h2 className={styles.recipeTitle}>{newRecipe.title}</h2>
      </div>
      <div className={styles.recipeCookInfo}>
        <div className={styles.recipeTime}>
          <TimeToCook className={styles.recipeTimeSvg} />
          <span>75 Minutes</span>
        </div>
        <div className={styles.recipeServing}>
          <ServingToCook className={styles.recipeServingSvg} />
          <span>4 Servings</span>
        </div>
      </div>

      <div className={styles.recipeIngredients}>
        <ul className={styles.recipeIngredientsList}>
          {newRecipe.ingredients.map((item, i) => (
            <li className={styles.recipeList} key={i}>
              <div className={styles.recipeIngredient}>{item}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.recipeDirections}>
        <h2 className={styles.recipeTitle1}>How to Cook It</h2>
        <p className={styles.recipeText}>
          This recipe was carefully designed and tested by {newRecipe.publisher}
          . Please check out directions at their website.
        </p>
        <button className={styles.recipeBtn}>Directions</button>
      </div>
    </div>
  );
};

export default Recipe;
