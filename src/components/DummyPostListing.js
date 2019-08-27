import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  postListing,
  getListing,
  updateListing
} from "../util/actions/listingActions";
import AuthRoute from "../util/AuthRoute";

const DumbPost = props => {
  const data = {
    listing_name: "Cool beans",
    user_id: 1
  };
  useEffect(() => {
    props.getListing();
  }, []);

  const editListing = {
    listing_id: 1,
    listing_name: "ADNAN AND DENNIS WAS HERE"
  };

  return (
    <div>
      <button onClick={() => props.postListing(data)}>Press to Post</button>
      <button
        onClick={() => {
          console.log(props.listing);
        }}
      >
        Get Some listings
      </button>
      <button onClick={() => props.updateListing(editListing)}>
        PUT request to update listing
      </button>
      Check console for post confirmation
    </div>
  );
};

const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems
});

export default connect(
  mapStateToProps,
  { postListing, getListing, updateListing }
)(DumbPost);
