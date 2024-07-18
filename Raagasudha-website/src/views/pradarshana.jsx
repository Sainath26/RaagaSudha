//This file has code for the pradarshana tab

import "../style/fonts.css";
import "../style/Pradarshana.css";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Image from "../assets/poster.jpg";
// import Bargraph from "../assets/images/Bargraph.png";
import Table from "../assets/images/Table.jpg";
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
        <section className="Our 5 year Journey so far">
          <div className="HomeHeading">Our 5 year Journey so far</div>
          {/* <div className="Bargraph">
            <img src={Bargraph} />{" "}
          </div> */}
          <div className="Bargraph">
            <img src={Table} />{" "}
          </div>
          <div className="HomeText">
            Over the past five years, our journey has been marked by significant
            milestones and remarkable growth. It all began in September 2018
            when we initiated our educational venture with a modest enrollment
            of 11 students. The journey gained momentum as we organized our
            inaugural Pradarshana in June 2019, drawing an audience of 160
            people to the Northern Stage. However, the unfolding narrative faced
            a temporary pause in public events due to the global challenges
            posed by the Covid-19 pandemic. Undeterred, we resumed our creative
            pursuits, leading to the second Pradarshana in June 2022. This time,
            our cast had expanded to 40 students, and the Northern Stage
            witnessed a full house with 175 attendees. The momentum further
            surged with the third Pradarshana in June 2023, hosted at the
            Whitley Bay Playhouse, where our ensemble of 50 students captivated
            an audience of 543 people. As we reach the present moment, our
            journey attains new heights with the announcement of the fourth
            Pradarshana – a special London Edition scheduled for the 17th and
            18th February 2024. This extraordinary event is set to unfold across
            two prestigious theatres in London, The Bhavan and The Royal Court
            Theatre, offering a collective seating capacity of 700. Notably, our
            age group has diversified, encompassing participants ranging from
            children to young adults and even elders, demonstrating our
            commitment to inclusivity with an age range spanning from 5 to 80
            years. This five-year odyssey is not merely a chronological passage
            of time but a testament to our dedication, creativity, and the
            growing impact of our artistic endeavors on a broader and more
            diverse audience.
          </div>
        </section>
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
