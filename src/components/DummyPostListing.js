import React, { useEffect } from "react";
import { connect } from "react-redux";
import AuthRoute from "../util/AuthRoute";
import {
  getUser,
  editUser,
  deleteUser,
  postBooking,
  deleteBooking
} from "../util/actions/authActions";
import Login from "../forms/LoginForm";

const DumbPost = props => {
  const dummyUser = {
    id: 1,
    bio: "WE ARE REALLY COOL"
  };
  const booking = {
    listing_id: 1,
    startDate: "Jan-08-1999",
    stopDate: "Jan-12-1999"
  };
  useEffect(() => {
    AuthRoute()
      .get(`/users/1`)
      .then(res => console.log(res));
  }, []);

  return (
    <div>
      <h2>Use the Console to test information</h2>
      <Login />
      {console.log(props.user)}
      <button onClick={() => props.editUser(dummyUser)}>
        Press to edit the user
      </button>
      <button onClick={() => props.deleteBooking(8)}>Delete Booking</button>
    </div>
  );
};

const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems,
  user: state.authReducer
});

export default connect(
  mapStateToProps,
  { getUser, editUser, deleteUser, postBooking, deleteBooking }
)(DumbPost);
