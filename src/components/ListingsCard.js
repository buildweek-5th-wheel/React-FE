import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import "../scss/Listings.scss";
// import logo-nav-white from "..\images\logo-nav-white.png";

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
        <button className="LandCard-Edit-Button">Book</button>
      </Card.Content>
    </Card>
  );
};

export default LandCard;
