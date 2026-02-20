import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h3>Contact</h3>

      <div className="card contact-card">

        <a href="mailto:dr_hoda_shawky@yahoo.com" className="contact-item">
          <FaEnvelope />
          dr.hodashawky@gmail.com
        </a>

        <a href="tel:01149942998" className="contact-item">
          <FaPhone />
          01149942998
        </a>

        <a href="tel:01003625053" className="contact-item">
          <FaPhone />
          01003625053
        </a>

        <a href="/cv.pdf" download className="btn primary">
          Download CV
        </a>

      </div>
    </section>
  );
}