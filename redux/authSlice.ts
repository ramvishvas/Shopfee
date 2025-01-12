import { loginApi } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id: string;
  email: string;
  username: string;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  accessToken: string | null;
}

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: null,
  accessToken: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const response = await loginApi(credentials);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Login failed";
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
