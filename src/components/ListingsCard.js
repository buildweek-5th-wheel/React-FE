import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

//All Land Listings
const LandCard = props => {
  return (
    <Card key={props["listing_id"]}>
      <Image src={props.land["img_url"]} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.land["listing_name"]}</Card.Header>
        <Card.Description>
          {props.land.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button>Edit (testing)</button>
      </Card.Content>
    </Card>
  );
};

export default LandCard;
