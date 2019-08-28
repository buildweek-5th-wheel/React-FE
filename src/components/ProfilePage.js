import React from "react";
import UserAccountForm from "../forms/ProfileForm";
import "../../src/scss/userAccount.scss";

const UserAccountComponent = props => {
  props = {userAccountData: {username: "DevinIsCool", password: "awpoefijapwoeifjaaowiejf"}}
  //rename incase we change props naming
  const userAccountData = props.userAccountData;
  return (
    <div className="userAccount">
      <h1>User Profile</h1>
      <UserAccountForm
        username={userAccountData.username}
        password={userAccountData.password}
      />
    </div>
  );
};

export default UserAccountComponent;
