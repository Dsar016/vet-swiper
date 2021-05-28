import "./CardVetInfo.css";

function CardVetInfo({data}) {
  return (
    <div className="App">
      <div className="card-vet-info-container">
        <div className="cvi-vet-image">image</div>
        <div className="cvi-vet-info">
          <div className="cvi-vet-info-name">Name Name</div>
          <div className="cvi-vet-info-email">Email</div>
        </div>
      </div>
    </div>
  );
}

export default CardVetInfo;
