// features/movementTrackerDropSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movementTrackerDropSlice = createSlice({
  name: 'dropdown',
  initialState: {
    symbol: '',
    stock: '',
    expiryDate: '',
    noOfStrikes: '',
    strikePrice: '',
    timeInterval: '',
    live: false,
    date: '',
  },
  reducers: {
    setSymbol: (state, action) => { state.symbol = action.payload; },
    setExpiryDate: (state, action) => { state.expiryDate = action.payload; },
    setNoOfStrikes: (state, action) => { state.noOfStrikes = action.payload; },
    setStrikePrice: (state, action) => { state.strikePrice = action.payload; },
    setTimeInterval: (state, action) => { state.timeInterval = action.payload; },
    setLive: (state, action) => { state.live = action.payload; },
    setDate: (state, action) => { state.date = action.payload; },
  },
});

export const { 
  setSymbol, 
  setStock, 
  setExpiryDate, 
  setNoOfStrikes, 
  setStrikePrice, 
  setTimeInterval, 
  setLive, 
  setDate 
} = movementTrackerDropSlice.actions;

export default movementTrackerDropSlice.reducer;