// This file has code for the Safeguarding tab
import "../style/fonts.css";
import "../style/home.css";
import Footer from "../components/footer";
import pdflogo from "../assets/images/pdf.png";
import pdf from "../assets/pdfs/safeguarding.pdf";

function Safeguarding() {
  const safeGuarding = () => {
    window.open(pdf, "_blank");
  };
  return (
    <div>
      <title>Safeguarding | Raagasudha Music Academy</title>
      <body>
        <div className="Heading">Safeguarding and child policy</div>
        <div className="HomeText">
          Raagasudha believes that no child or young person should experience
          abuse or harm. The academy is committed to the protection of children
          and young people. For full information please find the below
          attachment.
          <img className="pdflogo" src={pdflogo} onClick={safeGuarding} />
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Safeguarding;
