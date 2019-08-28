import React from "react";
import UserAccountForm from "../forms/ProfileForm";
import "../../src/scss/userAccount.scss";
import { Button, Header, Image, Modal } from 'semantic-ui-react'




const UserAccountComponent = props => {
  props = {userAccountData: {username: "DevinIsCool", password: "awpoefijapwoeifjaaowiejf", "img_url": "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", bio: "I am a cool person"}}
  //rename incase we change props naming
  const userAccountData = props.userAccountData;

  const EditButtonModal = () => (
    <Modal trigger={<Button>Edit</Button>}>
      <Modal.Header>Edit Profile</Modal.Header>
      <UserAccountForm
          username={userAccountData.username}
          password={userAccountData.password}
          imgUrl={userAccountData["img_url"]}
          bio={userAccountData.bio}
        />
    </Modal>
  )

  return (
    <div className="userAccount">
      <img src={userAccountData["img_url"]} />
      <h1>User Profile</h1>
      <h4>User Name</h4>
      <p>{userAccountData.username}</p>
      <h4>Password</h4>
      <p>NA</p>
      <h4>Bio</h4>
      <p>{userAccountData.bio}</p>
      {EditButtonModal()}
    </div>
  );
};

export default UserAccountComponent;
