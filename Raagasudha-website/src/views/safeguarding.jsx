// This file has code for the Safeguarding tab
import "../style/fonts.css";
import "../style/home.css";
import Footer from "../components/footer";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/ChildSafeguarding.pdf";
import pdf2 from "../assets/pdfs/AdultSafeguarding.pdf";
import pdf3 from "../assets/pdfs/EqualityDiversityInclusionPolicy.pdf";
import pdf4 from "../assets/pdfs/DataProtection.pdf";
function Safeguarding() {
  console.log("control is reaching here at Safeguarding");
  const safeGuarding = () => {
    window.open(pdf, "_blank");
  };
  const safeGuarding2 = () => {
    window.open(pdf2, "_blank");
  };
  const eqalityDiversityInclusion = () => {
    window.open(pdf3, "_blank");
  };
  const dataProtection = () => {
    window.open(pdf4, "_blank");
  };
  return (
    <div>
      <title>Policies | Raagasudha Music Academy</title>
      <body>
        <div className="Heading">Safeguarding and child policy</div>
        <div className="HomeText">
          Raaga sudha believes that no child or young person should experience
          abuse or harm. The academy is committed to the protection of children
          and young people. For full information please find the below
          attachments.
          <br></br>
          <img className="pdflogo" src={pdflogo} onClick={safeGuarding} />
          <center>Child Safeguarding Policy</center>
          <br></br>
          <img className="pdflogo" src={pdflogo} onClick={safeGuarding2} />
          <center>Adult Safeguarding Policy</center>
          <br></br>
          Safeguarding Lead: Mr Srikailash Venkitadri
          <br></br>
          14 Backworth Court, Newcastle upon Tyne, NE27 0RP
          <br></br>
          Phone: 07841354590
        </div>
        <div className="Heading">Equality, Diversity and Inclusion Policy</div>
        <div className="HomeText">
          Raaga Sudha values and celebrates the unique identities and
          backgrounds of all its students and staff. We are committed to
          fostering a culture of equality, diversity, and inclusion, where
          everyone feels respected, valued, and empowered to reach their full
          potential. For more information, please see the attached document.
          <br></br>
          <img
            className="pdflogo"
            src={pdflogo}
            onClick={eqalityDiversityInclusion}
          />
          <center>Equality, Diversity & Inclusion Statement</center>
        </div>
        <div className="Heading">Data Protection Policy</div>
        <div className="HomeText">
          Raaga Sudha is committed to protecting the privacy of its students,
          staff, and visitors. We take data security seriously and have robust
          policies and procedures in place to ensure the safekeeping of all
          personal information entrusted to us. For further details on how we
          handle and protect your data, please refer to the attached document
          outlining our Data Protection Policy.
          <br></br>
          <img className="pdflogo" src={pdflogo} onClick={dataProtection} />
          <center>Data Protection Policy </center>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Safeguarding;

//
