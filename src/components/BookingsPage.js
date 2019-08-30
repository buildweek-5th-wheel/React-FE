import "../scss/Listings.scss";
import React, { useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import "../scss/Bookings.scss";
import { connect } from "react-redux";
import { getUser, deleteBooking } from "../util/actions/authActions";

/* startDate, stopDate, listing_name */
const BookingsCard = props => {
  return (
    <Card key={props.listing_id}>
      <Card.Content>
        <Card.Header>{props.listingName}</Card.Header>
        <Card.Meta>{/* <img src={logo-nav-white} alt=""/> */}</Card.Meta>
        <Card.Description>
          <h4>Start Date: {props.startDate.substring(0, 10)}</h4>
          <h4>End Date: {props.stopDate.substring(0, 10)}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          className="negative"
          onClick={() => {
            props.deleteBooking(props.booking_id);
            props.getUser(props.user_id);
          }}
        >
          Delete
        </Button>{" "}
      </Card.Content>
    </Card>
  );
};

//Sort bookings by date?

function BookingsComponent(props) {
  useEffect(() => {
    props.getUser(props.user.id);
  }, []);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    setBookings(props.bookings);
  }, [props.user]);
  return (
    <div className="booking-list-parent">
      <h1>Your Bookings</h1>
      <section className="land-list-booking">
        {bookings.map(booking => (
          <BookingsCard
            key={booking.booking_id}
            startDate={booking.startDate}
            stopDate={booking.stopDate}
            listingName={booking.listing_name}
            deleteBooking={props.deleteBooking}
            booking_id={booking.booking_id}
            user_id={props.user.id}
            getUser={props.getUser}
          />
        ))}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  bookings: state.authReducer.user.bookings,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { getUser, deleteBooking }
)(BookingsComponent);
