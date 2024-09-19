import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// Password Reset Slice
const passwordResetSlice = createSlice({
    name: 'passwordReset',
    initialState: { loading: false, error: null, success: false },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(handleOTP.pending, (state) => {
          state.loading = true;
        })
        .addCase(handleOTP.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(handleOTP.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updatePassword.pending, (state) => {
          state.loading = true;
        })
        .addCase(updatePassword.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(updatePassword.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const handleOTP = createAsyncThunk(
    'passwordReset/handleOTP',
    async (email) => {
      const response = await api.handleOTP(email);
      return response.data;
    }
  );
  
  export const updatePassword = createAsyncThunk(
    'passwordReset/updatePassword',
    async ({ email, newPassword }) => {
      const response = await api.updatePassword(email, newPassword);
      return response.data;
    }
  );

  export default passwordResetSlice.reducer