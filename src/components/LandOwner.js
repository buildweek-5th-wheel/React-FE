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
        <section className="land-list">
            {OwnerList.map(owner => (

                <OwnerCard
                    key={owner.listing_id}
                   owner={owner}
                />


            ))}

        </section >
    )
            }