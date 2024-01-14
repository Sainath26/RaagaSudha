// This file has code for the Classes tab

import "../style/fonts.css";
import "../style/home.css";
import Footer from "../components/footer";
import Image from "../assets/images/guru.webp";
import Gallery from "../components/gallery";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/safeguarding.pdf";

function Home() {
  const safeGuarding = () => {
    window.open(pdf, "_blank");
  };
  return (
    <div>
      <title>Home | Raagasudha Music Academy</title>
      <body>
        <div className="simple-linear">
          <section className="NoticeBoard">
            <div className="NoticeText">
              {" "}
              Click{" "}
              <a
                href="https://www.ticketsource.co.uk/bhavan/t-pqkpnzm"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              to book tickets for Pradarshana happening at The Bhavan on
              17th-Feb
            </div>
          </section>
          <section className="AboutRaagasudha">
            <div className="HomeHeading">About Raagasudha</div>
            <div className="HomeText">
              Raagasudha Music Academy provides Carnatic Vocal music training in
              the North East of England through a structured curriculum.
              Raagasudha strives to be a leading music school in the UK by
              providing a creative and stimulating environment for excellence in
              music. Tradition, culture, and the Indian roots of classical
              singing shape the school&apos;s guiding principles. The teaching
              approach is modern and forward-thinking, embracing new
              opportunities within teaching and learning. Raaga Sudha enables
              and encourages the students to develop their own strengths and
              skills within a supportive environment. Music is the language of
              the heart and we continuously strive to experience its grandeur
              through discipline, dedication , and sincerity. Our sole aim at
              Raaga Sudha is for the students to ‘not just learn’ but to
              “experience music”. Raagasudha Music Academy provides Carnatic
              Vocal music training in the North East of England through a
              structured curriculum. Raagasudha strives to be a leading music
              school in the UK by providing a creative and stimulating
              environment for excellence in music. Tradition, culture, and the
              Indian roots of classical singing shape the school&apos;s guiding
              principles. The teaching approach is modern and forward-thinking,
              embracing new opportunities within teaching and learning. Raaga
              Sudha enables and encourages the students to develop their own
              strengths and skills within a supportive environment. Music is the
              language of the heart and we continuously strive to experience its
              grandeur through discipline, dedication , and sincerity. Our sole
              aim at Raaga Sudha is for the students to ‘not just learn’ but to
              “experience music”.
            </div>
          </section>
          <div className="contentImg">
            <img src={Image}></img>
          </div>
          <div className="Heading">Praveena Srikailash</div>
          <div className="HomeSubtext">Our Guru</div>
          <div className="HomeText">
            Mrs Praveena Srikailash is a disciple of Smt Vijaya Nagarajan who is
            a direct disciple of Padma Vibhushan Smt D K Pattammal. She was
            under her tutelage for 15 years in Chennai, India. Praveena has been
            teaching music for the last 13 years in the UK. She has taught at
            SAGE Gateshead in Tyne and Wear. She has special interest in bhajan
            renditions and has been part of many audio productions. She has
            recorded at the prestigious Blueprint Studios in Manchester. She
            strongly believes that music is the key to bliss and continues to
            upgrade her musical skills through regular lessons from experts in
            the field. She has provided vocal training for many young singers
            from different parts of the country. Her innovative “Raaga Days”
            concept has been well appreciated by her colleagues. Praveena loves
            spiritual singing and has a vast repertoire of soulful bhajans
            (short songs rendered with prayerful feeling). Although she is
            trained in Carnatic style, Praveena has been composing songs in
            different genres since her school days. Her works vary from
            patriotic songs, bhajans and songs on Indian sacred rivers to name a
            few. She believes that creativity is innate in every child and she
            strives to make them “not just learn but “enjoy and create music”.
          </div>
          <div className="Heading">Safeguarding and child policy</div>
          <div className="HomeText">
            Raagasudha believes that no child or young person should experience
            abuse or harm. The academy is committed to the protection of
            children and young people. For full information please find the
            below attachment.
            <img className="pdflogo" src={pdflogo} onClick={safeGuarding} />
          </div>
          <section className="HomeGalley">
            <div className="Heading">Gallery</div>
            <div className="Gallery">
              <Gallery />
            </div>
          </section>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Home;
