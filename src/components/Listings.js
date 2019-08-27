import React, { useEffect } from "react";

import LandCard from "./CardListings.js";

import { connect } from "react-redux";
import { getListing } from "../util/actions/listingActions";

function LandListings(props) {
  useEffect(() => {
    props.getListing();
  }, []);

  return (
    <div className="Land-List-Parent">
        <h1>Available Land</h1>
    <section className="land-list">
      
      {props.listing.map(land => (
        <LandCard key={land.listing_id} land={land} />
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
