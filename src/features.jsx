import feature1 from "./assets/feature1.png";

function Features() {
  return (
    <div>
      <div id="features">
        {/* <div id="img"> */}
          <img src={feature1} alt="BoldTap" />
        {/* </div> */}
        <div id="featuresCont">
          <div className="cardCont">
            <i className="fa fa-wifi"></i>
            <div className="expl">
              <b>Intergrated NFC</b>
              <p>
                Tap your card on to a smartphone and instantly share your
                contact details.
              </p>
            </div>
          </div>
          <div className="cardCont">
            <i className="fa fa-qrcode"></i>
            <div className="expl">
              <b>QR technology</b>
              <p>
                No NFC? No problem! Scan the QR Code using the device camera.
              </p>
            </div>
          </div>
          <div className="cardCont">
            <i className="fa fa-refresh"></i>
            <div className="expl">
              <b>Convenient</b>
              <p>
                Update your profile on the fly to suit any new potential
                connection you meet.
              </p>
            </div>
          </div>
          <div className="cardCont">
            <i className="fa-solid fa-id-card"></i>
            <div className="expl">
              <b>Cross compatible</b>
              <p>
                All the traditional contact information is included, both
                digitally and printed.
              </p>
            </div>
          </div>
          <div className="cardCont">
            <i className="fa-solid fa-computer"></i>
            <div className="expl">
              <b>Lead generation</b>
              <p>
                Any smart device can be The Bold Tap, Include tablets (iOS &
                Android applicable).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="featuretxt">
        <h1>
          <b>One tap to bold your possibilities.</b>
        </h1>
        <p>
          Make yourself oustanding when you network with The Bold Tap Digital
          Business Card. One simple tap to instantly share all your business and
          contact information. No app required.
        </p>
        <button>Explore Features</button>
      </div>
    </div>
  );
}

export default Features;
