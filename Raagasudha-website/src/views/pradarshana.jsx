//This file has code for the pradarshana tab

import "../style/fonts.css";
import "../style/Pradarshana.css";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Image from "../assets/poster.jpg";
function Pradarshana() {
  return (
    <>
      <title>Pradarshana | Raagasudha Music Academy</title>
      <div>
        <div className="Heading">About</div>
        <div className="PradarshanaText">
          Pradarshana is a plethora of vocal performances presented by the
          pupils and teachers of Raaga Sudha Music Academy. The performances are
          based on different genres of music like classical Carnatic,
          semi-classical, folk, light and even film music to name a few. It is
          an opportunity for students to showcase what they’ve learnt in Raaga
          Sudha music lessons. Pradarshana prides itself with discussions on
          India’s rich culture, tradition and values in the form of skits and
          plays.
          <div className="Image">
            <img src={Image}></img>
          </div>
        </div>
        <div className="Heading">Gallery</div>
        <div className="Gallery">
          <Gallery />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pradarshana;
