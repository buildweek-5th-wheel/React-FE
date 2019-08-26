import React from "react";



const LandCard = (props) => {


    return (

        <div className="land-card " key={props.lisiting_id}>


            <img src={props.img_url} />
            <h1>Name:{props.listing_name}</h1>
            <h3>User:{props.user_id}</h3>
            <h3>Description:{props.description}</h3>
        </div>
    );
}

export default LandCard