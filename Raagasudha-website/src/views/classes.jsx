import React from "react";
import "../style/main.css";
import "../style/fonts.css";

function Classes() {
  return (
    <div>
      <div className="Heading">Classes</div>
      <div className="Text">
        Carnatic Vocal Classes start from September onwards. There are in-person
        and online classes available. In-person classes are in the following two
        places. Get in touch with the school for more information on online
        classes
      </div>
      <div className="Card">
        <div className="Row">
          <div className="Column">
            <div className="Text">
              Gosforth, Newcastle St, Aidans Community Centre Princes Rd,
              Newcastle upon Tyne NE3 5TT ​ Saturdays 12:30-3:30 pm
            </div>
          </div>
          <div className="Column">
            <div className="Text">
              Durham Framwellgate Moor Community Centre Front St, Durham DH1 5BL
              ​ Sundays 8.30-10.30 am
            </div>
          </div>
        </div>
      </div>

      <div className="Heading">Join us</div>
      <div className="Text">Please click link for registration Link</div>
      <div className="Heading">Academic Calender</div>
      <div className="Text">Link for the academic Calender</div>
    </div>
  );
}

export default Classes;
