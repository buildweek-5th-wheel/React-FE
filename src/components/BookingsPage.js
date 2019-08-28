// import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react'
// import "../scss/LandOwner.scss";

// //Land owner user page



// const OwnerCard = props => {
//   return (
//     <Card key={props["listing_id"]}>
//       <Image src={props.owner["img_url"]} wrapped ui={false} />
//       <Card.Content>
//       <Card.Header>{props.owner["listing_name"]}</Card.Header>
//         <Card.Meta>
//         {/* <img src={logo-nav-white} alt=""/> */}
//         </Card.Meta>
//         <Card.Description>
//           {props.owner.description}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         {/* <button className="LandCard-Edit-Button">Edit (testing)</button> */}
//       </Card.Content>
//     </Card>
//   );
//   };

// export default OwnerCard;

// // const OwnerCard = props => {
// //   return (
// //     <Card className="owner-card " key={props.listing_id}>
// //       <img src={props.owner.img_url} />
// //       <h1>Name: {props.owner.listing_name}</h1>
// //       <h3>Listing ID: {props.owner.listing_id}</h3>
// //       <h3>User: {props.owner.user_id}</h3>
// //       <h3>Description: {props.owner.description}</h3>
// //     </Card>
// //   );
// // };

// // export default OwnerCard;





// import React, { useEffect, useState } from "react";
// import OwnerCard from "./LandOwnerCard.js"
// import data from "./DummyData.js"
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import LandImg from "../images/land1.jpg";
// import AddListingForm from "../forms/addListingForm";
// import "../scss/LandOwner.scss";

// const AddListingButtonModal = (props) => (
//     <Modal trigger={<Button className="add">Add</Button>}>
//       <Modal.Header>Add a Listing</Modal.Header>
//         <AddListingForm />
//     </Modal>
//   )

// //Land owner user page

// export default function OwnerListings() {

//     const [OwnerList, setOwnerList] = useState(data);
//     console.log(data);
//     return (
//         <div className="owner-list-parent">
//             <h1>Your land listings:</h1>
//             {AddListingButtonModal()}
//             <section className="land-list-owner">
//                 {OwnerList.map(owner => (
//                 <OwnerCard
//                     key={owner.listing_id}
//                     owner={owner}
//                 />
//             ))}
//             </section >
//     </div>
//     )
//             }