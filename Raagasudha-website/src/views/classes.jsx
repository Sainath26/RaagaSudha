// This file has code for the Classes tab

import "../style/main.css";
import "../style/fonts.css";
import "../style/classes.css";
import Footer from "../components/footer";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/Raagasudha Academic calender.pdf";
import FrequentlyAskedQuestions from "../components/faq";

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
        <div className="locations">
          <div className="location">
            <h2>Gosforth, Newcastle</h2>
            <p>St. Aidans Community Centre</p>
            <p>Princes Rd, Newcastle upon Tyne</p>
            <p>NE3 5TT</p>
            <p>Saturday&apos;s 12:30-3:30 pm</p>
          </div>
          <div className="location">
            <h2>Durham</h2>
            <p>Framwellgate Moor Community Centre</p>
            <p>Front St, Durham DH1 5BL</p>
            <p>Sunday&apos;s 8:30-10:30 am</p>
          </div>
        </div>
        <div className="Heading">Join us</div>
        <div className="NoticeText">
          {" "}
          Click{" "}
          <a
            href="https://forms.gle/FXBdv1GhPEdBZbBk8"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and fill out the Registration Form
        </div>
        <div className="Heading">Academic Calender</div>
        <div className="NoticeText">
          Click the below icon to download the academic calendar for 2023-24
          <br />
          <br />
          <img className="pdflogo" src={pdflogo} onClick={AcademicCalendar} />
        </div>
        <div className="Heading">Absence policy</div>
        <div className="ClassText">
          If students cannot make it to a class for any reason, we would request
          you to let me know at least 24 hours in advance. The classes will not
          be compensated if they miss their scheduled face to face lesson. If a
          student misses an assessment due to unforeseen circumstances, the
          Academy will reschedule it after deliberation. If gurus are unable to
          make it for a session, we will endeavor to give the parents a minimum
          of 24 hours’ notice (unless it is an emergency). Classes cancelled by
          gurus will either be compensated or refunded.
        </div>
        <div className="Heading">Frequently Asked Questions</div>
        <div className="FAQ">
          <FrequentlyAskedQuestions />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Classes;
