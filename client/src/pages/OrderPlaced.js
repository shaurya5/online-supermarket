import React, { useEffect, useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import DashboardNav from "../components/navs/DashboardNav";

function OrderPlaced() {
  const [coordinates, setCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);

  async function getCoordinates(zipcode) {
    const response = await axios.get(
      `http://dev.virtualearth.net/REST/v1/Locations?postalCode=${zipcode}&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
    );
    const res = response.data.resourceSets[0].point.coordinates;
    setCoordinates(res);
  }

  useEffect(() => {
    (async () => {
      const zipcode = localStorage.getItem("zipcode");
      const response = await axios.get(
        `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=india&postalCode=${zipcode}&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
      );
      const res = await response.data.resourceSets[0].resources[0].point
        .coordinates;
      setCoordinates(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const lat = coordinates[0];
      const long = coordinates[1];
      const response = await axios.get(
        `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?countryRegion=india&origins=28.7041,77.1025&destinations=${lat},${long}&travelMode=driving&key=ArZRxh2cuOK4l6Bz218wR9RJQXKGD2WYI6JHl3IKeRizL8mOLvoq5n4ZLvDQJhmv`
      );
      const res = await response.data.resourceSets[0].resources[0].results[0]
        .travelDistance;
      setDistance(calculateTime(res));
    })();
  }, [coordinates]);

  function calculateTime(dist) {
    return Math.floor(dist / 300);
  }

  const { width, height } = useWindowSize();
  return (
    <>
      <DashboardNav />
      {distance ? (
        <div className="d-flex justify-content-center align-items-center h-screen my-5">
          <div
            className="container my-5 mx-5 shadow-lg border px-5 py-5 "
            style={{ width: "50vw", margin: "0", padding: "0", height: "30vh" }}
          >
            <h3>Your order has been placed!</h3>
            <h4>Estimated delivery time: {distance !== 0 && distance} days!</h4>
          </div>
          <Confetti width={width} height={height} />
        </div>
      ) : (
        <h4>Calculating delivery time! Please wait</h4>
      )}

      {/* <div className="d-flex justify-content-center align-items-center h-screen my-5">
        <div
          className="container my-5 mx-5 shadow-lg border px-5 py-5 "
          style={{ width: "50vw", margin: "0", padding: "0", height: "30vh" }}
        >
          <h3>Your order has been placed!</h3>
          <h4>Estimated delivery time: {distance !== 0 && distance} days!</h4>
        </div>
      </div>
      <Confetti width={width} height={height} /> */}
    </>
  );
}

export default OrderPlaced;
