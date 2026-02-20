import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav>

      <h1>Dr/Hoda</h1>

      <ul className={open ? "nav-links open" : "nav-links"}>

        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#education" onClick={() => setOpen(false)}>
            Education
          </a>
        </li>

        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
        </li>

        <li>
          <a href="#conferences" onClick={() => setOpen(false)}>
            Conferences
          </a>
        </li>

        <li>
          <a href="#training" onClick={() => setOpen(false)}>
            Training
          </a>
        </li>

                {/* ✅ NEW */}
        <li>
          <a href="#languages" onClick={() => setOpen(false)}>
            Languages
          </a>
        </li>

        <li>
          <a href="#memberships" onClick={() => setOpen(false)}>
            Memberships
          </a>
        </li>



        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>

      </ul>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

    </nav>

  );

}