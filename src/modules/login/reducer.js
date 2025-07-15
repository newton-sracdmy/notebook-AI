import { createSlice } from "@reduxjs/toolkit";
import { verifyOTP } from "./action";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      state.permissions = {};
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.permissions = action.payload.user.permissions || {};
        state.error = null;
        state.isAuthenticated = true;
        
        localStorage.setItem("user", action.payload.user);
        localStorage.setItem("token", action.payload.token);
        console.log("===========action.payload.token========", action.payload.token);
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;