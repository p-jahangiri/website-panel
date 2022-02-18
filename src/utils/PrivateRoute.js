import React from "react";
import { useNavigate, Route, useLocation } from "react-router-dom";

//... => rest parameters

const PrivateRoute = ({ element, ...rest }) => {
  const location = useLocation();
const navigate = useNavigate();
  return (
    <Route {...rest}>
      {localStorage.getItem('user') ?
        <element />
      :
        <navigate to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;