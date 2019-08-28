import React, { useEffect, useState } from "react";
import OwnerCard from "./LandOwnerCard.js"
import data from "./DummyData.js"
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import LandImg from "../images/land1.jpg";
import AddListingForm from "../forms/addListingForm";
import "../scss/LandOwner.scss";

const AddListingButtonModal = (props) => (
    <Modal trigger={<Button className="add">Add</Button>}>
      <Modal.Header>Add a Listing</Modal.Header>
        <AddListingForm />
    </Modal>
  )

//Land owner user page

export default function OwnerListings() {

    const [OwnerList, setOwnerList] = useState(data);
    console.log(data);
    return (
        <div className="owner-list-parent">
            <h1>Your land listings:</h1>
            {AddListingButtonModal()}
            <section className="land-list-owner">
                {OwnerList.map(owner => (
                <OwnerCard
                    key={owner.listing_id}
                    owner={owner}
                />
            ))}
            </section >
    </div>
    )
            }