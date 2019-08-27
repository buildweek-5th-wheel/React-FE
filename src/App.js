import React from "react";
// import FormikLoginForm from "./forms/formikLogin";
// import FormikSignUpForm from "./components/signUpComponent";
// import "./scss/App.scss";
import UserAccountComponent from "./components/userAccountComponent";

const userAccountData = {username: "johnsmithiscool", password: "tacos", image_url: "https://images.unsplash.com/photo-1566781939916-4432f51a493a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", bio: "I like turtles"}

const App = () => {
  return <UserAccountComponent userAccountData={userAccountData}/>;
};

export default App;
