import "../scss/Listings.scss";
import React, { useEffect, useState } from "react";
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'

/* startDate, endDate, listing_name */
const BookingsCard = props => {
  return (
    <Card key={props["listing_id"]}>
      {/* <Image src={props.booking["img_url"]} wrapped ui={false} /> */}
      <Card.Content>
      <Card.Header>{props.listingName}</Card.Header>
        <Card.Meta>
        {/* <img src={logo-nav-white} alt=""/> */}
        </Card.Meta>
        <Card.Description>
            <h4>Start Date: {props.startDate}</h4>
            <h4>End Date: {props.endDate}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <button className="LandCard-Edit-Button">Edit (testing)</button> */}
      </Card.Content>
    </Card>
  );
  };

export default function BookingsComponent() {
    const data = [{"listing_id": 1, startDate: "Jan-01-2019", endDate: "Jan-11-2019", "listing_name": "Chicken Tacos"}, {"listing_id": 2, startDate: "Jan-01-2019", endDate: "Jan-11-2019", "listing_name": "Chicken Tacos"}, {"listing_id": 3, startDate: "Jan-01-2019", endDate: "Jan-11-2019", "listing_name": "Chicken Tacos"}];

    console.log(data);
    return (
        <div className="booking-list-parent">
            <h1>Your Bookings</h1>
            <section className="land-list-booking">
                {data.map(booking => (
                <BookingsCard
                    key={booking.listing_id}
                   startDate={booking.startDate}
                   endDate={booking.endDate}
                   listingName={booking["listing_name"]}
                />
            ))}
            </section >
    </div>
    )
            }