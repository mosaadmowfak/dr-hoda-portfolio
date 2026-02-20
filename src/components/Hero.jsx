import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/me.jpg" alt="Dr Hoda" />

      <h2 className="hero-name">
        Dr. Hoda Mohamed Shawky
      </h2>

      <h3 className="hero-title">
        Educational Technology Specialist
      </h3>

      <p>
        Head of Educational Technology Department with extensive experience
        in digital transformation, artificial intelligence in education,
        training, and social development.
      </p>

      <div className="buttons">
        <a href="#contact" className="btn primary">
          Contact Me
        </a>

        <a href="/cv.pdf" className="btn" download>
          Download CV
        </a>
      </div>

      <div className="hero-icons">
        <a href="mailto:dr.hodashawky@gmail.com">
          <FaEnvelope />
        </a>

        <a href="tel:01149942998">
          <FaPhone />
        </a>
      </div>
    </section>
  );
}