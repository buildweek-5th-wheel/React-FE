import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  postListing,
  getListing,
  updateListing,
  deleteListing
} from "../util/actions/listingActions";

const DumbPost = props => {
  const data = {
    listing_name: "SOME STUFF",
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
      <button
        onClick={() => {
          props.postListing(data);
          props.getListing();
          props.getListing();
        }}
      >
        Press to Post
      </button>
      <button
        onClick={() => {
          console.log(props.listing);
        }}
      >
        Get Some LOCAL STATE listings
      </button>
      <button onClick={() => props.updateListing(editListing)}>
        PUT request to update listing
      </button>
      <button onClick={() => props.deleteListing(9)}>Delete Listing 1</button>
      Check console for post confirmation
    </div>
  );
};

const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems
});

export default connect(
  mapStateToProps,
  { postListing, getListing, updateListing, deleteListing }
)(DumbPost);
