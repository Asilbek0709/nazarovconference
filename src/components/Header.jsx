import "../Styles/Styles.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header-section" data-aos="fade">
      {/* Логотип */}
      <div className="logo-part" data-aos="fade-left">
        <img src={Logo} alt="logo" />
      </div>

      {/* Навигация */}
      <nav
        className={`navigation-menu ${isOpen ? "active" : ""}`}
        
      >
        <ul className="navigation">
          <li>
            <Link to="/" className="Link">
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link to="/anjuman" className="Link">
              Anjuman
            </Link>
          </li>
          <li>
            <Link to="/galereya" className="Link">
              Rasmlar to'plami
            </Link>
          </li>
          <li>
            <Link to="/manzil" className="Link">
              Manzil
            </Link>
          </li>
          <li>
            <Link to="/ilmiy-meroslar" className="Link" >
              Ilmiy meroslar
            </Link>
          </li>
        </ul>
        <button className="Submit"><a href="http://t.me/Allohmadadkorim">Maqola</a></button>
      </nav>

      {/* Бургер */}
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;



/**/