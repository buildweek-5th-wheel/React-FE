import React from "react";
import { Card, Image, Modal, Button } from "semantic-ui-react";
import "../scss/Listings.scss";
import AddBookingForm from "../forms/BookForm";

const BookingButton = props => (
  <Modal
    trigger={
      <Button color="grey" className="neutral">
        Book
      </Button>
    }
  >
    <Modal.Header>Add a Booking</Modal.Header>
    <img className="book-img" src={props.land.image_url} alt="" />
    <AddBookingForm listing_id={props.land.listing_id} />
  </Modal>
);
//All Land Listings
const LandCard = props => {
  return (
    <Card key={props.land.listing_id}>
      <Image src={props.land.image_url} wrapped ui={false} />
      <Card.Content>
        <h2>Book today:</h2>
        <Card.Header>{props.land.listing_name}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>{props.land.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <BookingButton land={props.land} />
      </Card.Content>
    </Card>
  );
};

export default LandCard;
