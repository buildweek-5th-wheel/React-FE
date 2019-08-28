import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import "../scss/LandOwner.scss";

//Land owner user page

// const AddListingButtonModal = () => (
//   <Modal trigger={<Button className="add">Add</Button>}>
//     <Modal.Header>Add a Listing</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src={LandImg} />
//       <Modal.Description>
//         <AddListingForm />
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )


const OwnerCard = props => {




  
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
