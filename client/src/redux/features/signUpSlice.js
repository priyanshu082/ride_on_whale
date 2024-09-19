import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


 // SignUp Slice
 const signUpSlice = createSlice({
    name: 'signUp',
    initialState: { loading: false, error: null, success: false },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(emailVerificationOTPOnSignUp.pending, (state) => {
          state.loading = true;
        })
        .addCase(emailVerificationOTPOnSignUp.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(emailVerificationOTPOnSignUp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(register.pending, (state) => {
          state.loading = true;
        })
        .addCase(register.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(register.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const emailVerificationOTPOnSignUp = createAsyncThunk(
    'signUp/emailVerificationOTP',
    async (email) => {
      const response = await api.emailVerificationOTPOnSignUp(email);
      return response.data;
    }
  );
  
  export const register = createAsyncThunk(
    'signUp/register',
    async ({ name, email, mobile, password }) => {
      const response = await api.register(name, email, mobile, password);
      return response.data;
    }
  );

  export default signUpSlice.reducer