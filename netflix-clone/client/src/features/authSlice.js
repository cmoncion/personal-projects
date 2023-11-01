import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const USERS_URL_BASE = "http://localhost:3001/api/auth/";

// SIGN UP
export const signUpUser = createAsyncThunk("signUp", async (inputs) => {
  const config = {
    method: "POST",
    headers: {"Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  };

  const response = await fetch(`${USERS_URL_BASE}/signup`, config);
  const data = await response.json();
  return data;
});

// SIGN IN
export const signInUser = createAsyncThunk("singIn", async (inputs) => {
  const config = {
    method: "POST",
    headers: {"Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  };

  const response = await fetch(`${USERS_URL_BASE}/signin`, config);
  const data = await response.json();
  return data;
});

const initialState = {
    user: null,
    isLoading: false,
    isError: false,
  }

const authSlice = createSlice({
  name: "authUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      })

      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
