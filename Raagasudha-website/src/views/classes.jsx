import "../style/main.css";
import "../style/fonts.css";
import "../style/classes.css";
import Footer from "../components/footer";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/Raagasudha Academic calender.pdf";
function Classes() {
  const AcademicCalendar = () => {
    window.open(pdf, "_blank");
  };
  return (
    <>
      <title>Classes | Raagasudha Music Academy</title>
      <div>
        <div className="Heading">Classes</div>
        <div className="ClassText">
          Carnatic Vocal Classes commence this September, offering both
          in-person and online sessions. For those interested in attending
          physically, we have two dedicated locations. Please contact the school
          for further details on our online offerings.
        </div>
        <br></br>
        <br></br>
        <div className="locations">
          <div className="location">
            <h2>Gosforth, Newcastle</h2>
            <p>St. Aidans Community Centre</p>
            <p>Princes Rd, Newcastle upon Tyne</p>
            <p>NE3 5TT</p>
            <p>Saturday's 12:30-3:30 pm</p>
          </div>

          <div className="location">
            <h2>Durham</h2>
            <p>Framwellgate Moor Community Centre</p>
            <p>Front St, Durham DH1 5BL</p>
            <p>Sunday's 8:30-10:30 am</p>
          </div>
        </div>
        <div className="ClassText"></div>
        <div className="Heading">Academic Calender</div>
        <div className="Text">
          <img className="pdflogo" src={pdflogo} onClick={AcademicCalendar} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Classes;
