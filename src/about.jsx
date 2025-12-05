import img from "./assets/Asset 1.png";

function About() {
  return (
    <div>
      <div className="aboutContent">
        <div id="lftHero">
          <h1>
            Switch up to next generation of Digital Bussiness Cards
          </h1>
          <p>
            Build lasting connections and effortlessly share more about yourself
            in one-tap, physically and virtually
          </p>
          <button>
            <b>Get yours now</b>
          </button>
        </div>
        <div id="rgtHero">
          <img src={img} alt="BoldTap" />
        </div>
      </div>
    </div>
  );
}

export default About;
