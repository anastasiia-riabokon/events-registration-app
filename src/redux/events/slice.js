import {createSlice} from "@reduxjs/toolkit";
import {getAllEvents, getFilterEvents} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
};

const sliceEvents = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getFilterEvents.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.errorMessage = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.errorMessage = action.payload;
        }
      );
  },
});

export const eventsReducer = sliceEvents.reducer;
