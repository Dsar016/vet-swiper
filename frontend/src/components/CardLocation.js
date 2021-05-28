import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const mockApiReturn = () => {
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

const CardLocation = ({ location, zoomLevel }) => {
  return (
    <div style={{ height: "300px", width: "300px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

export default CardLocation;
