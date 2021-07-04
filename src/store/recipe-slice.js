import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipe",
  initialState: {
    search: {
      query: "",
      results: [],
    },
    recipe: {},
    bookmarks: [],
  },
  reducers: {
    addQueryAndResults(state, action) {
      const { payload } = action.payload;
      state.search.query = payload.query;
      state.search.results = payload.DATA.recipes;
    },

    addRecipeOnHashChange(state, action) {
      state.recipe = action.payload;
    },
  },
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice;
