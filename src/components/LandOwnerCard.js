import React from "react";
import {Card} from 'semantic-ui-react'



//Land owner user page


const OwnerCard = (props) => {


    return (

        <div className="owner-card " key={props.listing_id}>

<Card>
            <img src={props.owner.img_url} />

        <h1>Name: {props.owner.listing_name}</h1>
            
            <h3>Listing ID: {props.owner.listing_id}</h3>
            <h3>User: {props.owner.user_id}</h3>
            <h3>Description: {props.owner.description}</h3>


      </Card>         


    
    
   

        </div>
    );
}

export default OwnerCard