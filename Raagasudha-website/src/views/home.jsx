// This file has code for the Classes tab

import "../style/fonts.css";
import "../style/home.css";
import Footer from "../components/footer";
import Image from "../assets/images/guru.webp";
import Gallery from "../components/gallery";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/safeguarding.pdf";
import Bargraph from "../assets/images/Bargraph.png";
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
            <div className="HomeHeading">About Raaga Sudha</div>
            <div className="HomeText">
              Raaga Sudha Music Academy is a &quot;not for profit community
              interest company&quot; based in the North East of England. It is
              registered as a performing arts academy, providing Vocal music
              training in Indian Classical Carnatic Music through a structured
              curriculum. Our aim at Raaga Sudha is to help students explore,
              experience and enjoy music. Tradition, culture and Indian roots of
              classical singing shape the school&apos;s guiding principles.
              Integrating positive values like love, peace, truth, right conduct
              and non violence is an extremely important objective for Raaga
              Sudha. The teaching approach is modern and forward-thinking,
              embracing new opportunities, thereby enabling and encouraging the
              students to develop their own strengths and skills within a
              supportive environment. Students are trained and encouraged to
              become artists by providing a platform to showcase their talents
              every year. Our annual Pradarshana event forms an ideal production
              opportunity for students to express themselves through music.
              Music is the &quot;language of the heart&quot; and we continuously
              strive to experience its grandeur through discipline, dedication
              and sincerity.
            </div>
          </section>
          <section className="Our 5 year Journey so far">
            <div className="HomeHeading">Our 5 year Journey so far</div>
            <div className="Bargraph">
              <img src={Bargraph} />{" "}
            </div>
            <div className="HomeText">
              Over the past five years, our journey has been marked by
              significant milestones and remarkable growth. It all began in
              September 2018 when we initiated our educational venture with a
              modest enrollment of 11 students. The journey gained momentum as
              we organized our inaugural Pradarshana in June 2019, drawing an
              audience of 160 people to the Northern Stage. However, the
              unfolding narrative faced a temporary pause in public events due
              to the global challenges posed by the Covid-19 pandemic.
              Undeterred, we resumed our creative pursuits, leading to the
              second Pradarshana in June 2022. This time, our cast had expanded
              to 40 students, and the Northern Stage witnessed a full house with
              175 attendees. The momentum further surged with the third
              Pradarshana in June 2023, hosted at the Whitley Bay Playhouse,
              where our ensemble of 50 students captivated an audience of 543
              people. As we reach the present moment, our journey attains new
              heights with the announcement of the fourth Pradarshana – a
              special London Edition scheduled for the 17th and 18th February
              2024. This extraordinary event is set to unfold across two
              prestigious theatres in London, The Bhavan and The Royal Court
              Theatre, offering a collective seating capacity of 700. Notably,
              our age group has diversified, encompassing participants ranging
              from children to young adults and even elders, demonstrating our
              commitment to inclusivity with an age range spanning from 5 to 80
              years. This five-year odyssey is not merely a chronological
              passage of time but a testament to our dedication, creativity, and
              the growing impact of our artistic endeavors on a broader and more
              diverse audience.
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
