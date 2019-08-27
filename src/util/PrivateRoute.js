import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default AuthRoute;

// import React from "react";
// import { Route, Redirect } from "react-router";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (localStorage.getItem("token")) {
//           return <Component {...props} />;
//         }
//         return <Redirect to="/login" />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
