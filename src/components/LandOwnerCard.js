import React from "react";
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react'
import "../scss/LandOwner.scss";
import EditLandOwnerForm from "../forms/EditLandOwnerForm";

//Land owner user page

const OwnerCard = props => {
  const EditButtonModal = ({listing}) => (
    <Modal trigger={<Button>Edit</Button>}>
      <Modal.Header>Edit Profile</Modal.Header>
      <EditLandOwnerForm
          enableReinitialize
          listingName={listing["listing_name"]}
          imgUrl={listing["img_url"]}
          description={listing.description}
        />
    </Modal>
  )
  return (
    <Card key={props["listing_id"]}>
      <Image src={props.owner["img_url"]} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{props.owner["listing_name"]}</Card.Header>
        <Card.Meta>
        {/* <img src={logo-nav-white} alt=""/> */}
        </Card.Meta>
        <Card.Description>
          {props.owner.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <button className="LandCard-Edit-Button">Edit (testing)</button> */}
        <EditButtonModal listing={props.owner}/>
        <Button negative>Delete</Button>
      </Card.Content>
    </Card>
  );
  };

export default OwnerCard;

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
