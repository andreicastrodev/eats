import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipe-slice";
import logger from "redux-logger";
const store = configureStore({
  reducer: { recipe: recipesSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
