import React from "react";
import "../style/fonts.css";
import GalleryP from "../components/galleryP";
function Pradarshana() {
  return (
    <div>
      <div className="Heading">About</div>
      <div className="Text">
        Pradarshana is a plethora of vocal performances presented by the pupils
        and teachers of Raaga Sudha Music Academy. The performances are based on
        different genres of music like classical Carnatic, semi-classical, folk,
        light and even film music to name a few. It is an opportunity for
        students to showcase what they’ve learnt in Raaga Sudha music lessons.
        Pradarshana prides itself with discussions on India’s rich culture,
        tradition and values in the form of skits and plays.
      </div>
      <div className="Heading">Audience Turnout</div>
      <div className="Heading">Gallery</div>
      <div className="Gallery"><GalleryP/></div>
    </div>
  );
}

export default Pradarshana;
