import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  articles: [],
};

export const balanceSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    findArticlesSuccess: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { findArticlesSuccess } = articleSlice.actions;

//retrieves all articles from database and saves in state
export const findArticles = () => async (dispatch) => {
  try {
    const res = await fetch("maybe use axios idk").catch((error) => {
      console.error(error.message);
    });
    if (res && res.ok) {
      const data = await res.json();
      dispatch(findArticlesSuccess(data));
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default balanceSlice.reducer;