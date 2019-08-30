import React, { useState, useEffect } from "react";
import OwnerCard from "./LandOwnerCard.js";
import { Button, Modal } from "semantic-ui-react";
import AddListingForm from "../forms/addListingForm";
import "../scss/LandOwner.scss";
import { connect } from "react-redux";
import {
  postListing,
  updateListing,
  deleteListing
} from "../util/actions/listingActions";
import { getUser } from "../util/actions/authActions";

const AddListingButtonModal = props => (
  <Modal
    trigger={
      <Button color="green" className="positive">
        Add
      </Button>
    }
  >
    <Modal.Header>Add a Listing</Modal.Header>
    <AddListingForm user={props.user} history={props.history} />
  </Modal>
);

const OwnerListings = props => {
  useEffect(() => {
    props.getUser(props.user.id);
  }, []);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(props.user.listings);
  }, [props.user]);
  return (
    <div className="owner-list-parent">
      <h1>Your land listings:</h1>
      <AddListingButtonModal user={props.user.id} history={props.history} />
      <section className="land-list-owner">
        {listings.map(owner => (
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
  { postListing, updateListing, deleteListing, getUser }
)(OwnerListings);
