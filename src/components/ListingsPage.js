import React, { useEffect } from "react";

import ListingsCard from "./ListingsCard.js";

import { connect } from "react-redux";
import { getListing } from "../util/actions/listingActions";

//testing purposes data doesn't have picture
import data from "./DummyData";

function LandListings(props) {
  useEffect(() => {
    props.getListing();
  }, []);

  //originally props.listing.map, changing to data.map because props.listing doesn't have picture

  return (
    <div className="Land-List-Parent">
      <h1 className="Land-List-Parent-h1">Available Land</h1>
      <section className="land-list">
        {data.map(land => (
          <ListingsCard key={land.listing_id} land={land} />
        ))}
        {console.log("Data from server", props.listing)}
      </section>
    </div>
  );
}
const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems
});

export default connect(
  mapStateToProps,
  { getListing }
)(LandListings);
