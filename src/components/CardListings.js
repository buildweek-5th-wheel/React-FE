import React from "react";

//All Land Listings
const LandCard = (props) => {


    return (

        <div className="land-card " key={props.listing_id}>


            <img src={props.land.img_url} />
            <h1>Name:{props.land.listing_name}</h1>
            <h3>Listing ID:{props.land.listing_id}</h3>
            <h3>User:{props.land.user_id}</h3>
            <h3>Description:{props.land.description}</h3>
        </div>
    );
}

export default LandCard