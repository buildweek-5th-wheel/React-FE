import React, { useEffect } from "react";
import { connect } from "react-redux";
import AuthRoute from "../util/AuthRoute";
import { getUser, editUser, deleteUser } from "../util/actions/authActions";

const DumbPost = props => {
  const dummyUser = {
    id: 1,
    bio: "WE ARE REALLY COOL"
  };
  useEffect(() => {
    // AuthRoute()
    //   .get(`/users`)
    //   .then(res => console.log(res));
  }, []);

  return (
    <div>
      <h2>Use the Console to test information</h2>
      {console.log(props.user)}
      <button onClick={() => props.editUser(dummyUser)}>
        Press to edit the user
      </button>
      <button onClick={() => props.deleteUser(6)}>Delete User</button>
    </div>
  );
};

const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems,
  user: state.authReducer
});

export default connect(
  mapStateToProps,
  { getUser, editUser, deleteUser }
)(DumbPost);
