import "../style/footer.css";
import "../style/main.css";

import Instagram from "../assets/icons/instagram.png";
import Youtube from "../assets/icons/youtube.png";
import Linkedin from "../assets/icons/linkedin.png";

function Footer() {
  const Instagramlink = () => {
    window.open("https://www.instagram.com/raagasudhamusicacademy/", "_blank");
  };
  const YoutubeLink = () => {
    window.open(
      "https://www.youtube.com/@raagasudhamusicacademy4272",
      "_blank"
    );
  };
  const LinkedinLink = () => {
    window.open(
      "https://www.linkedin.com/company/raagasudhamusicacademy/",
      "_blank"
    );
  };
  return (
    <div className="Footer">
      <div className="Copyright">©2023 by Raagasudha Music Academy.</div>
      <div className="SocialMedia">
        <img src={Instagram} onClick={Instagramlink} />
        <img src={Youtube} onClick={YoutubeLink} />
        <img src={Linkedin} onClick={LinkedinLink} />
      </div>
    </div>
  );
}

export default Footer;
