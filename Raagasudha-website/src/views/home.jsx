// This file has code for the Classes tab

import "../style/fonts.css";
import "../style/home.css";
import Footer from "../components/footer";
import Image from "../assets/images/guru.webp";
import Gallery from "../components/gallery";

function Home() {
  // const safeGuarding = () => {
  //   window.open(pdf, "_blank");
  // };
  return (
    <div>
      <title>Home | Raagasudha Music Academy</title>
      <body>
        <div className="simple-linear">
          {/* <section className="NoticeBoard">
            <div className="NoticeText">
              After a very successful performance at{" "}
              <strong>Royal court Theatre</strong>, London and{" "}
              <strong>The Bhavan</strong>, London, Raagasudha is getting ready
              for their next mega performance.
            </div>
            <div className="NoticeText">
              <strong>Pradarshana&apos;24</strong>, themed{" "}
              <strong>&quot;Explore Experience Enjoy&quot; </strong>
              will be happening at the <strong>
                Glasshouse International
              </strong>{" "}
              centre for music, Gateshead.
            </div>
          </section> */}
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

          <div className="contentImg">
            <img src={Image}></img>
          </div>

          <div className="Heading">Vidya Praveena Srikantan</div>
          <div className="HomeSubtext">Our Guru</div>
          <div className="HomeText">
            Vidya Praveena Srikantan is a disciple of Smt Vijaya Nagarajan who
            is a direct disciple of Padma Vibhushan Smt D K Pattammal. She was
            under her tutelage for 15 years in Chennai, India learning Indian
            Classical Carnatic music. Praveena has been teaching music for the
            last 15 years in the UK. She has taught at SAGE Gateshead in Tyne
            and Wear. She is also a qualified Behaviour Consultant specializing
            in dealing with children and young adults with learning
            disabilities. Her aim is to utilize both her skills in music and
            behaviour therapy together by taking music to children and young
            adults with learning disabilities in the community. She has a
            special interest in bhajan renditions and has been part of many
            audio productions. She has recorded at the prestigious Blueprint
            Studios in Manchester. She strongly believes that music is the key
            to transcending all boundaries and leads to social harmony. She
            continues to upgrade her musical skills through regular lessons from
            experts in the field. She has provided vocal training for many young
            singers from different parts of the country. Her innovative “Raaga
            Days” concept has been well appreciated by her colleagues. Praveena
            loves spiritual singing and has a vast repertoire of soulful bhajans
            (short songs rendered with prayerful feeling). Although she is
            trained in Carnatic style, Praveena has been composing songs in
            different genres since her school days. Her works vary from
            patriotic songs, bhajans and songs on Indian sacred rivers to name a
            few. She believes that creativity is innate in every child, and she
            strives to make them “not just learn but “enjoy and create music”.
          </div>
          {/* <div className="Heading">Safeguarding and child policy</div>
          <div className="HomeText">
            Raagasudha believes that no child or young person should experience
            abuse or harm. The academy is committed to the protection of
            children and young people. For full information please find the
            below attachment.
            <img className="pdflogo" src={pdflogo} onClick={safeGuarding} />
          </div> */}
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
