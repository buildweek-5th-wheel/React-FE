import React, { useEffect, useState } from "react";

import LandCard from "./CardListings.js"
import data from "./DummyData.js"
export default function LandListings() {

    const [landList, setLandList] = useState(data)
    console.log(data)
    //   useEffect(() => {

    //     axios
    //       .get('')
    //       .then(response => {
    //         setLandList(response.data.results);
    //         console.log("r", response)
    //       })

    //   }, []);


    return (
        <section className="land-list">
            {landList.map(land => (

                <LandCard
                    key={land.listing_id}
                   land={land}
                />


            ))}

        </section >
    );
}