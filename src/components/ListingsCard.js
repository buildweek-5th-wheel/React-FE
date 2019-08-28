import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

//All Land Listings
const LandCard = props => {
  return (
    <Card key={props["listing_id"]}>
      <Image src={props.land["img_url"]} wrapped ui={false} />
      <Card.Content>
      <h2>Book today:</h2> 
        <Card.Header>{props.land["listing_name"]}</Card.Header>
        <Card.Meta>
        "image=\images\logo-nav-white.png"</Card.Meta>
        <Card.Description>
          {props.land.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="LandCard-Edit-Button">Edit (testing)</button>
      </Card.Content>
    </Card>
  );
};

export default LandCard;
