function Card(props) {
  return (
    <div className="card" style={{}}>
      <div className="card-body">
        <img src={props.image} alt="BoldTap" style={{}} />{" "}
        <div className="cardTxt">
          <h5 className="card-title">
            <b>{props.title}</b>
          </h5>
          <p
            className="card-text"
            style={{ fontFamily: "Geneva", fontSize: "20px" }}
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
