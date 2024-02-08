import { createSlice } from "@reduxjs/toolkit";
import { generatePrompt } from "./services/api";
const initialState = {
  loading: false,
  error: null,
  description: "",
  keywords: "",
  keywordsList: [],
};

export const counterSlice = createSlice({
  name: "homeScreenSlice",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setkeywords: (state, action) => {
      const keywordsList = action.payload.split(" ");
      state.keywords = keywordsList.join(" ");
      state.keywordsList = keywordsList.filter((val) => val != "");
    },
    onItemRemove: (state, action) => {
      state.keywordsList = state.keywordsList.filter(
        (text) => text != action.payload
      );
      state.keywords = state.keywordsList.join(" ");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generatePrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generatePrompt.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(generatePrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setDescription, setkeywords, onItemRemove } =
  counterSlice.actions;

export default counterSlice.reducer;
