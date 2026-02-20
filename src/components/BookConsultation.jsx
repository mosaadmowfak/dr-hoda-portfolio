import { FaWhatsapp } from "react-icons/fa";

export default function BookConsultation() {

  return (

    <section id="consultation" className="consultation-section">

      <div className="card card-wide consultation-container">

        <h3>Book a "Family Support" Consultation</h3>

        <p>

          Book a private Family Support consultation directly with Dr. Hoda via WhatsApp.

          <br /><br />

          Click the button below to start your consultation.

        </p>


        <a
          href="https://wa.me/201114949298"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-consult-btn"
        >

          <FaWhatsapp />

          Book via WhatsApp: 01114949298

        </a>

      </div>

    </section>

  );

}