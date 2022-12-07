import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderPlaced() {
  const [coordinates, setCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);

  // async function getCoordinates(zipcode) {
  //   const response = await axios.get(
  //     `http://dev.virtualearth.net/REST/v1/Locations?postalCode=${zipcode}&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
  //   );
  //   const res = response.data.resourceSets[0].point.coordinates;
  //   setCoordinates(res);
  // }

  // useEffect(() => {
  //   (async () => {
  //     // const zipcode = localStorage.getItem("zipcode");
  //     const zipcode = 141002
  //     const response = await axios.get(
  //       `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=india&postalCode=${zipcode}&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
  //     );
  //     const res = await response.data.resourceSets[0].resources[0].point
  //       .coordinates;
  //     setCoordinates(res);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const lat = coordinates[0];
  //     const long = coordinates[1];
  //     const response = await axios.get(
  //       `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?countryRegion=india&origins=28.7041,77.1025&destinations=${lat},${long}&travelMode=driving&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
  //     );
  //     const res = await response.data.resourceSets[0].resources[0].results[0]
  //       .travelDistance;
  //     setDistance(res);
  //   })();
  // }, [coordinates]);

  return <div>{distance !== 0 && distance }</div>;
}

export default OrderPlaced;
