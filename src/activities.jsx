import Card from "./card.jsx";
// import img from "./assets/the Bold tap logo.png";

function Activities() {
  return (
    <div className="activities">
      <div className="activitiesCont">
        <div className="actTxt">
          <h2>Connecting, Anything, Anywhere</h2>
          <p>Your smart digital business card, designed to be versatile.</p>
        </div>

        <div className="actCard">
          <Card
            image={""}
            title="One-Tap to Share"
            text="Contactless sharing with your customised NFC business Card."
          />
          <Card
            image={""}
            title="Dynamic QR Code"
            text="Built-in digital QR Code to share your e-business card."
          />
          <Card
            image={""}
            title="Unique Digital Link"
            text="Customise your digital link to swiftly share your e-business card."
          />
          <Card
            image={""}
            title="Unique Digital Link"
            text="Implementing backend services and APIs for seamless data integration."
          />
          <Card
            image={""}
            title="Unique Digital Link"
            text="Implementing backend services and APIs for seamless data integration."
          />
          <Card
            image={""}
            title="Unique Digital Link"
            text="Implementing backend services and APIs for seamless data integration."
          />
        </div>
      </div>
    </div>
  );
}

export default Activities;
