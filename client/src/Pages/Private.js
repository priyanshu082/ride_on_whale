import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
   const { isSubscribed, user } = useContext(AuthContext);
   const location = useLocation();

  //  useEffect(() => {
  //    if (localStorage.getItem("user") && location.pathname === "/SubscriptionPage") {
  //      toast.success("You are already subscribed!");
  //    }
  //  }, [isSubscribed, location])

   if (!localStorage.getItem("user")) {
     return <Navigate to="/login" />
   }

   return children;
};

export default PrivateRoute;