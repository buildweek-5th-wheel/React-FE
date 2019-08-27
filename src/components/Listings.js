import React, { useEffect } from "react";

import LandCard from "./CardListings.js";
import data from "./DummyData.js";
import { connect } from "react-redux";
import { getListing } from "../util/actions/listingActions";

function LandListings(props) {
  useEffect(() => {
    props.getListing();
  }, []);

  return (
    <section className="land-list">
      {props.listing.map(land => (
        <LandCard key={land.listing_id} land={land} />
      ))}
      {console.log("Data from server", props.listing)}
    </section>
  );
}
const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems
});

export default connect(
  mapStateToProps,
  { getListing }
)(LandListings);
