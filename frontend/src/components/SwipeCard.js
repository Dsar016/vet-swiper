import CardVetInfo from "./CardVetInfo";
import CardLocation from "./CardLocation";

function SwipeCard(location, data) {
  return (
    <div className="App" data={data}>
      <CardLocation location={location} />
      <CardVetInfo />
    </div>
  );
}

export default SwipeCard;