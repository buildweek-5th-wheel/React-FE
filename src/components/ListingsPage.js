import React, { useEffect } from "react";

import ListingsCard from "./ListingsCard.js";
import { connect } from "react-redux";
import { getListing } from "../util/actions/listingActions";
import { getUser } from "../util/actions/authActions";

//testing purposes data doesn't have picture
// import data from "./DummyData";

function LandListings(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.getUser(props.user.id);
    }
  }, []);
  useEffect(() => {
    props.getListing();
  }, []);

  //originally props.listing.map, changing to data.map because props.listing doesn't have picture

  return (
    <div className="Land-List-Parent">
      <h1 className="Land-List-Parent-h1">Places To Stay</h1>

      <section className="land-list">
        {props.listing.map(land => (
          <ListingsCard key={land.listing_id} land={land} />
        ))}
      </section>
    </div>
  );
}
const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { getListing, getUser }
)(LandListings);
