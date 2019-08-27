import React, { useEffect, useState } from "react";
import OwnerCard from "./LandOwnerCard.js"
import data from "./DummyData.js"


//Land owner user page

export default function OwnerListings() {

    const [OwnerList, setOwnerList] = useState(data)
    console.log(data)
    //   useEffect(() => {

    //     axios
    //       .get('')
    //       .then(response => {
    //         setOwnerList(response.data.results);
    //         console.log("r", response)
    //       })

    //   }, []);


    return (
        <div className="owner-list-parent">

            <h1>Your land listings:</h1>
<button className= "Add-Land-Button">Add Land</button>
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