import React from "react";
import "./scss/App.scss";
import LandListings from "./components/Listings.js"
import OwnerListings from "./components/LandOwner.js"

const App = () => {
  return <div>Welcome to 5th Wheel Build Week App
 <LandListings/>
 <OwnerListings/>
  </div>
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Login from "./components/login";
// import Register from "./components/register";
// import Homepage from "./pages/homepage";
// import Navbar from "./components/navbar";
// import data from "./components/DummyData.js";
// import LandCard from "./components/CardListings.js";
// import PrivateRoute from "./redux/util/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       {/* NAVBAR */}
//       <Navbar />

//       {/* ROUTES */}
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/login" render={props => <Login {...props} />} />
//         <Route path="/register" render={props => <Register {...props} />} />
//       </Switch>
//     </Router>
//   );
};

export default App;
