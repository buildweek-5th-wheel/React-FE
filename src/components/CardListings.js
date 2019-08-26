import React from "react";



const LandCard = (props) => {


    return (

        <div className="land-card " key={props.lisiting_id}>


            <img src={props.land.img_url} />
            <h1>Name:{props.land.listing_name}</h1>
            <h3>User:{props.land.user_id}</h3>
            <h3>Description:{props.land.description}</h3>
        </div>
    );
}

export default LandCard