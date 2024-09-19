import { combineReducers } from "redux";
import adminSlice from "../features/adminSlice";
import allDataSlice from "../features/allDataSlice";
import bannerSlice from "../features/bannerSlice";
import buySellSlice from "../features/buySellSlice";
import collectionSlice from "../features/collectionSlice";
import commutativeSumSlice from "../features/commutativeSumSlice";
import downloadDataSlice from "../features/downloadDataSlice";
import expiryDatesSlice from "../features/expiryDatesSlice";
import isSubscribedSlice from "../features/isSubscribedSlice";
import loginSlice from "../features/loginSlice";
import marketSlice from "../features/marketSlice";
import OI_dataSlice from "../features/OI_dataSlice";
import passwordResetSlice from "../features/passwordResetSlice";
import screenerSlice from "../features/screenerSlice";
import signUpSlice from "../features/signUpSlice"
import strikeGraphSlice from "../features/strikeGraphSlice";
import strikePriceSlice from "../features/strikePriceSlice";
import subscriptionSlice from "../features/subscriptionSlice";
import movementTrackerDropdownSlice from "../features/movementTrackerDropdownSlice";



const rootReducer = combineReducers({
  market: marketSlice.reducer,
  collection: collectionSlice.reducer,
  expiryDates: expiryDatesSlice.reducer,
  banner: bannerSlice.reducer,
  admin: adminSlice.reducer,
  isSubscribed: isSubscribedSlice.reducer,
  buySell: buySellSlice.reducer,
  strikePrice: strikePriceSlice.reducer,
  OI_data: OI_dataSlice.reducer,
  allData: allDataSlice.reducer,
  login: loginSlice.reducer,
  screener: screenerSlice.reducer,
  strikeGraph: strikeGraphSlice.reducer,
  downloadData:downloadDataSlice.reducer,
  passwordReset: passwordResetSlice.reducer,
  subscription:subscriptionSlice.reducer,
  signUp:signUpSlice.reducer,
  commutativeSum:commutativeSumSlice.reducer,
  movementTrackerDropdown:movementTrackerDropdownSlice.reducer
});


export default rootReducer;
