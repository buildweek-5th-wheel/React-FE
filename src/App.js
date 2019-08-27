import React from "react";
import "./scss/App.scss";
import LandListings from "./components/Listings.js"
import OwnerListings from "./components/LandOwner.js"

const App = () => {
  return <div>Welcome to 5th Wheel Build Week App;
  <LandListings/>
  <OwnerListings />
  </div>
};

export default App;
