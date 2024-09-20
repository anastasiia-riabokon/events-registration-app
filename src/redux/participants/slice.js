import {createSlice} from "@reduxjs/toolkit";
import {getAllParticipants, getFilterParticipants} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
  filter: [],
};

const sliceParticipants = createSlice({
  name: "participants",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllParticipants.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getFilterParticipants.fulfilled, (state, action) => {
        state.filter = action.payload;
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

export const participantsReducer = sliceParticipants.reducer;
