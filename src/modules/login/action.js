import { createAsyncThunk } from "@reduxjs/toolkit";
import hyperAudion from "../../services/hyperAudion";

export const sendOTP = createAsyncThunk(
  'auth/sendOTP',
  async (userData, { rejectWithValue }) => { 
  try{
  const response = await hyperAudion.post(`/auth/login`, userData);
  
  return response;
  }
 catch(error){
    return rejectWithValue(error.response?.data?.message || "Login failed!");
}
});

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (userData, { rejectWithValue }) => { 
  try{
  const response = await hyperAudion.post(`/auth/otp/verify`, userData);
  const { user, token } = response.data.data;
  localStorage.setItem("token", token)
  return { user, token };
  }
 catch(error){
    return rejectWithValue(error.response?.data?.message || "OTP verification failed!");
}
});
