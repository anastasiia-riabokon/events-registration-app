import {createAsyncThunk} from "@reduxjs/toolkit";
import {myApi} from "../../config/myApi";

export const getAllParticipants = createAsyncThunk("participants/getAll", async (id, thunkApi) => {
  try {
    const {data} = await myApi.get(`/participants/${id}`);
    return data;
  } catch (error) {
    throw thunkApi.rejectWithValue(error.message);
  }
});

export const getFilterParticipants = createAsyncThunk(
  "participants/getFilter",
  async (params, thunkApi) => {
    const {id, ...query} = params;
    try {
      const {data} = await myApi.get(`/participants/${id}/filter`, {params: query});
      return data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postNewParticipant = createAsyncThunk("participants/add", async (params, thunkApi) => {
  const {id, ...body} = params;
  try {
    const {data} = await myApi.post(`/participants/${id}`, body);
    return data;
  } catch (error) {
    throw thunkApi.rejectWithValue(error.message);
  }
});
