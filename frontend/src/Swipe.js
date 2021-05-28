import SwipeCard from "./components/SwipeCard";
import { useEffect, useState } from "react";
import "./Swipe.css"

const returnMockApi = () => {
  return {
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@email.com",
    location: {
      lat: -36.9107212,
      lng: 174.7689044,
    },
    image: "temp",
  };
};

function Swipe() {
  const [vetData, setVetData] = useState({});
  console.log(vetData);

  useEffect(() => {
    setVetData(returnMockApi());
  }, []);

  return (
    <div className="swipe-container">
      <SwipeCard location={vetData["location"]} data={vetData} />
    </div>
  );
}

export default Swipe;
