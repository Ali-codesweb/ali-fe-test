import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/global_services/apiClient.js";
// Example action creator
export const generatePrompt = createAsyncThunk(
  "homeScreenSlice/generatePrompt",
  async (body, thunkAPI) => {
    // An interceptor is created in `apiClient` whimch handles the error handling thats why
    // there is no try catch in here
    const { data } = await apiClient.post(`openapi/`, body);
    if (data) {
      console.log(data);
    }
  }
);
