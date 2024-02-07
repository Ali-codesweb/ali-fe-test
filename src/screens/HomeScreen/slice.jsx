import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { generatePrompt } from "./services/api";
const initialState = {
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "homeScreenSlice",
  initialState,
  reducers: {},
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
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
