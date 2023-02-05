import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* Gets user from localStorage */
const user = JSON.parse(localStorage.getItem("user") || "{}");

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isError = false),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.message = "");
    },
  },
  extraReducers: () => {},
});

export const { reset } = auth.actions;
export default auth.reducer;
