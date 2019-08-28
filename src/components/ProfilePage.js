import React from "react";
import UserAccountForm from "../forms/ProfileForm";
import "../../src/scss/userAccount.scss";

const UserAccountComponent = props => {
  //rename incase we change props naming
  const userAccountData = props.userAccountData;
  return (
    <div className="userAccount">
      <h1>User Profile</h1>
      <img
        className="profilePic"
        alt="User Profile"
        src={userAccountData["image_url"]}
      />
      <UserAccountForm
        username={userAccountData.username}
        password={userAccountData.password}
        bio={userAccountData.bio}
      />
    </div>
  );
};

export default UserAccountComponent;
