import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL_FOR_APIS });

export const isMarketOpen = () => {
  API.get("/ismarketopen");
};

export const fetchCollection = () => {
  API.get("/stocks");
};

export const fetchExpiryDates = (symbol, date) => {
    API.post("/expirydates", { symbol, date });
  };

//infinty moving
export const fetchBannerData = () => {
  API.get("/banner");
};

//admin apis
export const fetchUserData = () => {
  API.get("/users");
};

export const fetchSubscribers = () => {
  API.get("/subscribers");
};

//home page
export const isSubscribed = (email) => {
  API.post("/issubscribed", { email });
};

//buyer_seller page
export const fetchBuySellData = (
  symbol,
  expiryDate,
  strikePrice,
  timeInterval,
  date
) => {
  API.post("/buysell", { symbol, expiryDate, strikePrice, timeInterval, date });
};

export const fetchStrikepriceData = (symbol, expiryDate, noOfStrikes, date) => {
  API.post("/strikeprices", { symbol, expiryDate, noOfStrikes, date });
};



//oi page
export const fetchCommutativeSum = (symbol,expiryDate,noOfStrikes,timeInterval,date) => {
  API.post("/commutativesum", {symbol,expiryDate,noOfStrikes,timeInterval,date,});
};

//data page
export const downloadData=(symbol,expiryDate,noOfStrikes,date)=>{
    API.post("/download",{symbol,expiryDate,noOfStrikes,date});
}

export const fetchAllData=(symbol,expiryDate,noOfStrikes,timeRange,date)=>{
    API.post("/all",{symbol,expiryDate,noOfStrikes,timeRange,date});
}

export const fetchPcrData=(symbol,expiryDate,noOfStrikes,date)=>{
    API.post("/pcr",{symbol,expiryDate,noOfStrikes,date});
}

//forgot passowrd
export const handleOTP=(email)=>{
    API.post("/forgetotp",{email});
}

export const updatePassword=(email,newPassword)=>{
    API.post("/updatepass",{email,passowrd:newPassword});
}

//login
export const login=(email,password)=>{
    API.post("/login",{email,password});
}


//oi page
export const fetchAllExpiryDate=(symbol)=>{
    API.post("/allexpirydates",{symbol});
}

export const fetchOIData=(symbol, noOfStrikes, timeInterval, expiryDate )=>{
    API.post("/oi",{ symbol, noOfStrikes, timeInterval, expiryDate });
}

//signup
export const emailVerificationOTPOnSignUp=(email)=>{
    API.post("/registerotp",{email})
}

export const register=(name,email,mobile,password)=>{
    API.post("/register",{name,email,mobile,password})
}

//screener
export const fetchScreenerData=()=>{
    API.get("/screener");
}

//strikegraph
export const fetchStrikeGraphData=( symbol,expiryDate,strikePrice,timeInterval,noOfStrikes,date)=>{
    API.post("/strikegraph",{symbol,expiryDate,strikePrice,timeInterval,noOfStrikes,date});
}

// export const fetchStrikepriceData=( symbol,expiryDate,strikePrice,timeInterval,noOfStrikes,date)=>{
//     API.post("/strikegraph",{symbol,expiryDate,strikePrice,timeInterval,noOfStrikes,date});
// }


//subscribe
export const subscribe=(email,tenure)=>{
    API.post("/subscribe",{email,tenure});
}