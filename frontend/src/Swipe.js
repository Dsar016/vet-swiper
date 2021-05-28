import SwipeCard from "./components/SwipeCard";
import {useEffect, useState} from 'react';

const returnMockApi = () => {
  return {
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@email.com",
    location: {
      lat: -36.9107212,
      lng: 174.7689044,
    },
    image: "temp"
  }
}

function Swipe() {

  const [vetData, setVetData] = useState({})

  useEffect(() => {
    setVetData(returnMockApi())
  }, []);

  return (
    <div className="App" data={vetData}>
      <SwipeCard location={vetData["location"]}/>
    </div>
  );
}

export default Swipe;