import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postListing, getListing } from "../util/actions/listingActions";

const DumbPost = props => {
  const data = {
    listing_name: "Cool beans",
    user_id: 1
  };
  useEffect(() => {
    props.getListing();
  }, []);

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
      Check console for post confirmation
    </div>
  );
};

const mapStateToProps = state => ({
  listing: state.listingReducer.listingItems
});

export default connect(
  mapStateToProps,
  { postListing, getListing }
)(DumbPost);
