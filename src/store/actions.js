import { recipesActions } from "./recipe-slice";

export const fetchSearchAndResult = (query) => {
  return async (dispatch) => {
    const handleFetchRecipes = async () => {
      try {
        const RES = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${query}`
        );

        if (!RES.ok) {
          throw new Error("something went wrong");
        }

        const DATA = await RES.json();

        dispatch(
          recipesActions.addQueryAndResults({ payload: { query, DATA } })
        );
      } catch (error) {
        console.error(error);
      }
    };
    handleFetchRecipes();
  };
};
