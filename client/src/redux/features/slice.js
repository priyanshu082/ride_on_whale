import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

// Market Slice
const marketSlice = createSlice({
  name: 'market',
  initialState: { isOpen: false, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkMarketOpen.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkMarketOpen.fulfilled, (state, action) => {
        state.loading = false;
        state.isOpen = action.payload;
      })
      .addCase(checkMarketOpen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const checkMarketOpen = createAsyncThunk(
  'market/checkOpen',
  async () => {
    const response = await api.isMarketOpen();
    return response.data;
  }
);


// Collection Slice
const collectionSlice = createSlice({
  name: 'collection',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchCollection = createAsyncThunk(
  'collection/fetch',
  async () => {
    const response = await api.fetchCollection();
    return response.data;
  }
);

// ExpiryDates Slice
const expiryDatesSlice = createSlice({
  name: 'expiryDates',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpiryDates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExpiryDates.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExpiryDates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchExpiryDates = createAsyncThunk(
  'expiryDates/fetch',
  async ({ symbol, date }) => {
    const response = await api.fetchExpiryDates(symbol, date);
    return response.data;
  }
);


// Banner Slice
const bannerSlice = createSlice({
  name: 'banner',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchBannerData = createAsyncThunk(
  'banner/fetch',
  async () => {
    const response = await api.fetchBannerData();
    return response.data;
  }
);

// Admin Slice
const adminSlice = createSlice({
  name: 'admin',
  initialState: { users: [], subscribers: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSubscribers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload;
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchUserData = createAsyncThunk(
  'admin/fetchUsers',
  async () => {
    const response = await api.fetchUserData();
    return response.data;
  }
);

export const fetchSubscribers = createAsyncThunk(
  'admin/fetchSubscribers',
  async () => {
    const response = await api.fetchSubscribers();
    return response.data;
  }
);

// Subscription Slice
const isSubscribedSlice = createSlice({
  name: 'subscription',
  initialState: { isSubscribed: false, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkSubscription.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.isSubscribed = action.payload;
      })
      .addCase(checkSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const checkSubscription = createAsyncThunk(
  'subscription/check',
  async (email) => {
    const response = await api.isSubscribed(email);
    return response.data;
  }
);



// BuySell Slice
const buySellSlice = createSlice({
  name: 'buySell',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuySellData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuySellData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBuySellData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchBuySellData = createAsyncThunk(
  'buySell/fetch',
  async ({ symbol, expiryDate, strikePrice, timeInterval, date }) => {
    const response = await api.fetchBuySellData(symbol, expiryDate, strikePrice, timeInterval, date);
    return response.data;
  }
);


// StrikePrice Slice
const strikePriceSlice = createSlice({
  name: 'strikePrice',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrikepriceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStrikepriceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStrikepriceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchStrikepriceData = createAsyncThunk(
  'strikePrice/fetch',
  async ({ symbol, expiryDate, noOfStrikes, date }) => {
    const response = await api.fetchStrikepriceData(symbol, expiryDate, noOfStrikes, date);
    return response.data;
  }
);

// OI Slice
const commutativeSumSlice = createSlice({
  name: 'oi',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommutativeSum.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommutativeSum.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommutativeSum.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchCommutativeSum = createAsyncThunk(
  'oi/fetchCommutativeSum',
  async ({ symbol, expiryDate, noOfStrikes, timeInterval, date }) => {
    const response = await api.fetchCommutativeSum(symbol, expiryDate, noOfStrikes, timeInterval, date);
    return response.data;
  }
);

// Data Slice
const alldataSlice = createSlice({
  name: 'data',
  initialState: { allData: [], pcrData: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPcrData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPcrData.fulfilled, (state, action) => {
        state.loading = false;
        state.pcrData = action.payload;
      })
      .addCase(fetchPcrData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchAllData = createAsyncThunk(
  'data/fetchAll',
  async ({ symbol, expiryDate, noOfStrikes, timeRange, date }) => {
    const response = await api.fetchAllData(symbol, expiryDate, noOfStrikes, timeRange, date);
    return response.data;
  }
);

export const fetchPcrData = createAsyncThunk(
  'data/fetchPcr',
  async ({ symbol, expiryDate, noOfStrikes, date }) => {
    const response = await api.fetchPcrData(symbol, expiryDate, noOfStrikes, date);
    return response.data;
  }
);

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await api.login(email, password);
    return response.data;
  }
);

// Screener Slice
const screenerSlice = createSlice({
  name: 'screener',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScreenerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchScreenerData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchScreenerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchScreenerData = createAsyncThunk(
  'screener/fetch',
  async () => {
    const response = await api.fetchScreenerData();
    return response.data;
  }
);

// StrikeGraph Slice
const strikeGraphSlice = createSlice({
  name: 'strikeGraph',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrikeGraphData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStrikeGraphData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStrikeGraphData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchStrikeGraphData = createAsyncThunk(
  'strikeGraph/fetch',
  async ({ symbol, expiryDate, strikePrice, timeInterval, noOfStrikes, date }) => {
    const response = await api.fetchStrikeGraphData(symbol, expiryDate, strikePrice, timeInterval, noOfStrikes, date);
    return response.data;
  }
);

// ... (previous code remains the same)

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
  
  // Subscription Slice (adding subscribe function)
  export const subscribe = createAsyncThunk(
    'subscription/subscribe',
    async ({ email, tenure }) => {
      const response = await api.subscribe(email, tenure);
      return response.data;
    }
  );
  
  // Update the subscriptionSlice to include the new subscribe action
  const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: { isSubscribed: false, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(subscribe.pending, (state) => {
          state.loading = true;
        })
        .addCase(subscribe.fulfilled, (state) => {
          state.loading = false;
          state.isSubscribed = true;
        })
        .addCase(subscribe.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  // OI Slice (adding fetchAllExpiryDate and fetchOIData)
  export const fetchAllExpiryDate = createAsyncThunk(
    'oi/fetchAllExpiryDate',
    async (symbol) => {
      const response = await api.fetchAllExpiryDate(symbol);
      return response.data;
    }
  );
  
  export const fetchOIData = createAsyncThunk(
    'oi/fetchOIData',
    async ({ symbol, noOfStrikes, timeInterval, expiryDate }) => {
      const response = await api.fetchOIData(symbol, noOfStrikes, timeInterval, expiryDate);
      return response.data;
    }
  );
  
  // Update the oiSlice to include the new actions
  const oiSlice = createSlice({
    name: 'oi',
    initialState: { 
      data: [], 
      allExpiryDates: [], 
      oiData: [],
      loading: false, 
      error: null 
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(fetchAllExpiryDate.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAllExpiryDate.fulfilled, (state, action) => {
          state.loading = false;
          state.allExpiryDates = action.payload;
        })
        .addCase(fetchAllExpiryDate.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchOIData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchOIData.fulfilled, (state, action) => {
          state.loading = false;
          state.oiData = action.payload;
        })
        .addCase(fetchOIData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  // Data Slice (adding downloadData)
  export const downloadData = createAsyncThunk(
    'data/downloadData',
    async ({ symbol, expiryDate, noOfStrikes, date }) => {
      const response = await api.downloadData(symbol, expiryDate, noOfStrikes, date);
      return response.data;
    }
  );
  
  // Update the dataSlice to include the new downloadData action
  const downloadDataSlice = createSlice({
    name: 'data',
    initialState: { allData: [], pcrData: [], downloadedData: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(downloadData.pending, (state) => {
          state.loading = true;
        })
        .addCase(downloadData.fulfilled, (state, action) => {
          state.loading = false;
          state.downloadedData = action.payload;
        })
        .addCase(downloadData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  // Export all slices
  export {
    marketSlice,
    collectionSlice,
    expiryDatesSlice,
    bannerSlice,
    adminSlice,
    subscriptionSlice,
    buySellSlice,
    strikePriceSlice,
    oiSlice,
    downloadDataSlice,
    authSlice,
    screenerSlice,
    strikeGraphSlice,
    passwordResetSlice,
    signUpSlice,
    commutativeSumSlice,
    isSubscribedSlice,
    alldataSlice
  };