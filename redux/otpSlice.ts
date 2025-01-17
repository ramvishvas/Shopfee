import { sendOtpApi } from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to send OTP
export const sendOtp = createAsyncThunk(
  "otp/sendOtp",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      const response = await sendOtpApi(phoneNumber);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to send OTP");
    }
  }
);

interface OtpState {
  isLoading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: OtpState = {
  isLoading: false,
  success: false,
  error: null,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    resetOtpState: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetOtpState } = otpSlice.actions;

export default otpSlice.reducer;
