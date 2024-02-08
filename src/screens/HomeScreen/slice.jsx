import { createSlice } from "@reduxjs/toolkit";
import { generatePrompt } from "./services/api";
const initialState = {
  loading: false,
  error: null,
  description: "",
  keywords: [],
};

export const counterSlice = createSlice({
  name: "homeScreenSlice",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setkeywords: (state, action) => {
      const value = action.payload.target.value;
      const keywordsList = value.split(" ").filter((val) => val != "");
      state.keywords = keywordsList;
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
export const { setDescription, setkeywords } = counterSlice.actions;

export default counterSlice.reducer;
