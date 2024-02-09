import { createSlice } from "@reduxjs/toolkit";
import { generatePrompt } from "./services/api";
const initialState = {
  loading: false,
  description: "",
  keywords: "",
  keywordsList: [],
  responseModelOpen: false,
  responseData: null,
};

export const counterSlice = createSlice({
  name: "homeScreenSlice",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    resetState: (state) => {},
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
    closeModal: (state) => {
      state.responseModelOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generatePrompt.pending, (state) => {
        state.loading = true;
        state.responseModelOpen = false;
      })
      .addCase(generatePrompt.fulfilled, (state, action) => {
        Object.assign(state, initialState);
        state.responseData = action.payload;
        state.responseModelOpen = true;
      })
      .addCase(generatePrompt.rejected, (state) => {
        Object.assign(state, initialState);
        state.responseModelOpen = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setDescription, setkeywords, onItemRemove, closeModal } =
  counterSlice.actions;

export default counterSlice.reducer;
