import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/global_services/apiClient.js";
// Example action creator
export const generatePrompt = createAsyncThunk(
  "homeScreenSlice/generatePrompt",
  async (thunkAPI) => {
    // An interceptor is created in `apiClient` which handles the error handling thats why
    // there is no try catch in here
    const { data } = await apiClient.get(`openapi/test`);
    if (data) {
      console.log(data);
    }
  }
);
