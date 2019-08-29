import React, { useState, useEffect } from "react";
import OwnerCard from "./LandOwnerCard.js";
import data from "./DummyData.js";
import { Button, Modal } from "semantic-ui-react";
import AddListingForm from "../forms/addListingForm";
import "../scss/LandOwner.scss";
import AuthRoute from "../util/AuthRoute";
import { connect } from "react-redux";
import {
  postListing,
  updateListing,
  deleteListing
} from "../util/actions/listingActions";

const AddListingButtonModal = props => (
  <Modal trigger={<Button className="add">Add</Button>}>
    <Modal.Header>Add a Listing</Modal.Header>
    <AddListingForm />
  </Modal>
);
const dumbListing = {
  listing_name: "Some more land",
  user_id: 8,
  description: "Super fun place to chill",
  image_url:
    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
};

const OwnerListings = props => {
  const [OwnerList] = useState(data);

  return (
    <div className="owner-list-parent">
      <h1>Your land listings:</h1>
      <AddListingButtonModal />
      <button
        onClick={() =>
          AuthRoute()
            .post(`https://bw-5th-wheel.herokuapp.com/listings`, dumbListing)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
      >
        Send post data
      </button>
      <section className="land-list-owner">
        {props.user.listings.map(owner => (
          <OwnerCard key={owner.listing_id} owner={owner} />
        ))}
      </section>
    </div>
  );
};
const mapStateToProps = state => ({
  listings: state.listingReducer.listingsItems,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { postListing, updateListing, deleteListing }
)(OwnerListings);
