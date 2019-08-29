import React, { useState, useEffect } from "react";
import UserAccountForm from "../forms/ProfileForm";
import "../../src/scss/userAccount.scss";
import { connect } from "react-redux";
import { getUser } from "../util/actions/authActions";
import { Button, Image, Modal, Card } from "semantic-ui-react";

const UserAccountComponent = props => {
  console.log("User", props.user);
  const [user, setUser] = useState({
    username: "",
    password: "",
    bio: "",
    image_url: "",
    id: props.user.id
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (props.user.id && token) {
      props.getUser(props.user.id);
    }
  }, [props.user.id, token]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const EditButtonModal = ({ user }) => (
    <Modal trigger={<Button>Edit</Button>}>
      <Modal.Header>Edit Profile</Modal.Header>
      <UserAccountForm
        enableReinitialize
        username={user.username}
        image_url={user.image_url}
        bio={user.bio}
      />
    </Modal>
  );

  return (
    <Card className="userAccount default">
      <Image src={user.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>User Profile</Card.Header>
        <Card.Description>
          <h4>User Name</h4>
          <p>{user.username}</p>
          <h4>Bio</h4>
          <p>{user.bio}</p>
          <EditButtonModal className="neutral" color="grey" user={user} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserAccountComponent);
