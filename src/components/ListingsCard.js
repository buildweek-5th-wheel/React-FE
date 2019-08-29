import React from "react";
import { Card, Icon, Image, Modal, Button} from 'semantic-ui-react'
import "../scss/Listings.scss";
import AddBookingForm from "../forms/BookForm";

// import logo-nav-white from "..\images\logo-nav-white.png";
const AddListingButtonModal = (props) => (
  <Modal trigger={<Button className="add">Book</Button>}>
    <Modal.Header>Add a Listing</Modal.Header>
      <AddBookingForm />
     
  </Modal>
)
//All Land Listings
const LandCard = props => {
  return (
    <Card key={props["listing_id"]}>
      <Image src={props.land["img_url"]} wrapped ui={false} />
      <Card.Content>
      <h2>Book today:</h2> 
        <Card.Header>{props.land["listing_name"]}</Card.Header>
        <Card.Meta>
        {/* <img src={logo-nav-white} alt=""/> */}
        </Card.Meta>
        <Card.Description>
          {props.land.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {AddListingButtonModal()}
        
      </Card.Content>
    </Card>
  );
};

export default LandCard;
