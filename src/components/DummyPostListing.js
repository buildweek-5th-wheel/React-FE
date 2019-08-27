import React from "react";
import { connect } from "react-redux";
import { postListing } from "../util/actions/listingActions";

const DumbPost = props => {
  const data = {
    listing_name: "Cool beans",
    user_id: 1
  };
  return (
    <div>
      <button onClick={() => props.postListing(data)}>Press to Post</button>
      Check console for post confirmation
    </div>
  );
};

export default connect(
  null,
  { postListing }
)(DumbPost);
