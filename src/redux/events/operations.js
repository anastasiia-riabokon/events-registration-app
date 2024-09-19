import {createAsyncThunk} from "@reduxjs/toolkit";
import {myApi} from "../../config/myApi";

export const getAllEvents = createAsyncThunk("events/getAll", async (_, thunkAPI) => {
  try {
    const {data} = await myApi.get("/events");
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.message);
  }
});

export const getFilterEvents = createAsyncThunk("events/getFilter", async (params, thunkAPI) => {
  try {
    const {data} = await myApi.get("/events/filter", {
      params,
    });
    return data;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.message);
  }
});
