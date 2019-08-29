import React from "react";
import { Card, Image, Button, Modal } from "semantic-ui-react";
import "../scss/LandOwner.scss";
import EditLandOwnerForm from "../forms/EditLandOwnerForm";
import { connect } from "react-redux";
import { deleteListing } from "../util/actions/listingActions";
import { getUser } from "../util/actions/authActions";

//Land owner user page

const EditButtonModal = ({ listing }) => {
  return (
    <Modal
      trigger={
        <Button color="grey" className="neutral">
          Edit
        </Button>
      }
    >
      <Modal.Header>Edit Profile</Modal.Header>
      <EditLandOwnerForm
        enableReinitialize
        listing_name={listing.listing_name}
        image_url={listing.image_url}
        description={listing.description}
        listing_id={listing.listing_id}
      />
    </Modal>
  );
};

const OwnerCard = props => {
  return (
    <Card key={props.listing_id}>
      <Image src={props.owner.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.owner.listing_name}</Card.Header>
        <Card.Meta>{/* <img src={logo-nav-white} alt=""/> */}</Card.Meta>
        <Card.Description>{props.owner.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <button className="LandCard-Edit-Button">Edit (testing)</button> */}
        <EditButtonModal listing={props.owner} />
        <Button
          onClick={() => {
            props.deleteListing(props.owner.listing_id);
            props.getUser(props.owner.user_id);
          }}
          color="red"
          className="delete"
          negative
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};

export default connect(
  null,
  { getUser, deleteListing }
)(OwnerCard);

// const OwnerCard = props => {
//   return (
//     <Card className="owner-card " key={props.listing_id}>
//       <img src={props.owner.img_url} />
//       <h1>Name: {props.owner.listing_name}</h1>
//       <h3>Listing ID: {props.owner.listing_id}</h3>
//       <h3>User: {props.owner.user_id}</h3>
//       <h3>Description: {props.owner.description}</h3>
//     </Card>
//   );
// };

// export default OwnerCard;
