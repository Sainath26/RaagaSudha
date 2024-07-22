import "../style/fonts.css";
import "../style/directors.css";
import Footer from "../components/footer";
import Image1 from "../assets/images/directorsimg/drgupta.jpg";
import Image2 from "../assets/images/directorsimg/ak.jpeg";
import Image3 from "../assets/images/directorsimg/srikailash.jpg";
// import Bargraph from "../assets/images/Bargraph.png";

function Directors() {
  return (
    <>
      <title>Directors | Raagasudha Music Academy</title>
      <div>
        <div className="Heading">Our Directors</div>
        <div>
          <h2>Dr Bijoysree Sengupta</h2>
        </div>
        <div className="Image">
          <img src={Image1}></img>
        </div>
        <div className="PradarshanaText">
          Dr Sengupta is a retired Consultant in Gynecology and Obstetrics at
          NHS, UK. He was also the Chairman of the European Council of
          Gynecologists and Obstetricians and an Emeritus Professor in the same
          field. He has authored 3 books for MD students in Gynecology and
          Obstetrics. He has a keen ear for music and is a big lover of arts. He
          encouraged his daughters to become artists and helped them train in
          piano and singing. He is extremely passionate about inculcating arts
          and music in young children in the North East. He is registered
          disabled and makes sure that Raaga Sudha always involves “artists with
          disabilities” in their performances each year.
        </div>
        <div>
          <h2>Mr Arvind Kywalya</h2>
        </div>
        <div className="Image">
          <img src={Image2}></img>
        </div>
        <div className="PradarshanaText">
          Mr Kywalya is training to become a chartered accountant in London. He
          works for PWC, London and is passionate about music. He is a
          performing artist who performs in various stages in London and India.
          He has a massive following of around 100,000 people on Instagram and
          has released a lot of music singles on his page. He focusses on
          developing young artists in the North East through Raaga Sudha Music
          Academy.
        </div>
        <div>
          <h2>Mr Srikailash Venkitadri</h2>
        </div>
        <div className="Image">
          <img src={Image3}></img>
        </div>
        <div className="PradarshanaText">
          As a social entrepreneur, Mr Venkitadri strives to take music,
          especially Indian music, to every part of the local community in the
          North East UK. He teaches music at the West Jesmond Primary School,
          Newcastle (after school club) and wants to take Indian music to people
          of all ages and abilities. His passion is to use music to unite
          everyone together. He wants to take music to the elderly community as
          a method to reduce social isolation (which is a major growing concern
          especially amongst the elderly within the Asian communities).
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Directors;
