import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import logo from "../assets/logo-wordmark.png";
import { primaryNav, courseCategories } from "../data/courses.js";
import { companyFacts } from "../data/accreditations.js";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logo} alt="Anmar International Training" />
          </span>
          <p>
            One of the region's pioneer centers in training, development and
            consultation — supporting organizations in developing their people
            across administrative, technical and vocational fields.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter"><Icon name="twitter" size={17} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={17} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={17} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {primaryNav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
            <li><Link to="/courses">Public Courses</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Course Categories</h4>
          <ul>
            {courseCategories.slice(0, 6).map((c) => (
              <li key={c.slug}><Link to={`/courses#${c.slug}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in Touch</h4>
          <ul className="footer__contact">
            <li><Icon name="pin" size={16} /> {companyFacts.address}</li>
            <li><Icon name="phone" size={16} /> {companyFacts.phones.join(" / ")}</li>
            <li><Icon name="mail" size={16} /> {companyFacts.email}</li>
            <li><Icon name="clock" size={16} /> Sun – Thu, 8:00 AM – 4:00 PM</li>
          </ul>
          <Link to="/contact" className="btn btn-outline btn-sm footer__contact-cta">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Anmar International Center for Training &amp; Consultation. All rights reserved.</p>
          <p>Jubail, Kingdom of Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
