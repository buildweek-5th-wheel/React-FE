import React, { useState, useEffect } from "react";
import UserAccountForm from "../forms/ProfileForm";
import "../../src/scss/userAccount.scss";
import { connect } from "react-redux";
import { getUser } from "../util/actions/authActions";
import { Button, Header, Image, Modal } from 'semantic-ui-react'




const UserAccountComponent = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    bio: "",
    image_url: ""
  });

  useEffect(() => {
    props.getUser(1);
  }, []);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
console.log(user)

  const EditButtonModal = ({user}) => (
    <Modal trigger={<Button>Edit</Button>}>
      <Modal.Header>Edit Profile</Modal.Header>
      <UserAccountForm
          enableReinitialize
          username={user.username}
          password={user.password}
          imgUrl={user.image_url}
          bio={user.bio}
        />
    </Modal>
  )

  return (
    <div className="userAccount">
      <img src={user.img_url} />
      <h1>User Profile</h1>
      <h4>User Name</h4>
      <p>{user.username}</p>
      <h4>Password</h4>
      <p>NA</p>
      <h4>Bio</h4>
      <p>{user.bio}</p>
      <EditButtonModal user={user}/>
    </div>
  );
};

const mapStateToProps = state => ({
user: state.authReducer.user
})

export default connect(mapStateToProps,{getUser})(UserAccountComponent);
