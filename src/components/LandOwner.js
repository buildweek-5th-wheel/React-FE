import React, { useEffect, useState } from "react";
import OwnerCard from "./LandOwnerCard.js"
import data from "./DummyData.js"
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import LandImg from "../images/land1.jpg";
import AddListingForm from "../forms/addListingForm";

const AddListingButtonModal = () => (
    <Modal trigger={<Button>Add a Listing</Button>}>
      <Modal.Header>Add a Listing</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={LandImg} />
        <Modal.Description>
          <AddListingForm />
        </Modal.Description>
      </Modal.Content>
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