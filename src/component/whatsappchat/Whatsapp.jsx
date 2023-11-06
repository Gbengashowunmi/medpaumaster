import { Link } from "react-router-dom";
import "./whatsapp.scss";
import { useState } from "react";
function Whatsapp() {
    const [showWhatasapp, setShowWhatsapp] =useState(false)

    setTimeout(() => {
        setShowWhatsapp(true)
    }, 3000);
  return (
    <>
      {showWhatasapp && (
        <div className="whatsapp">
          <Link
            to="//api.whatsapp.com/send?phone=2349085323596&text=Hi+MedPau+International+Limited.+I+want+to+make+enquiries+on..."
            target="blank"
            rel="noopener noreferrer"
          >
            <p>
              <img
                src="/images/whatsapp_logo.png"
                alt="whatsapplogo"
                srcset=""
              />
            </p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Whatsapp;
