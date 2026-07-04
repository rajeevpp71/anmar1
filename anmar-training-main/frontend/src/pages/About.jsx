import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import building from "../assets/building.jpg";
import "./pages.css";

const pillars = [
  { icon: "compass", title: "Scientific Foundation", text: "Programs are designed on a rigorous scientific and vocational basis, not improvised content." },
  { icon: "people", title: "Authorized Specialists", text: "Delivery by efficient, experienced trainers drawing on international best practice." },
  { icon: "target", title: "Partner-Focused", text: "Every engagement is built around our partners' real human-resource development goals." },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Pioneering training, development &amp; consultation</h1>
          <p>
            Anmar Training &amp; Consultation Center supports organizations in
            developing their people across administrative, technical and
            vocational fields — with the best international experience behind
            every program.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <div className="about-split__media">
            <img src={building} alt="Anmar Training Center, Business Tower, Jubail" />
          </div>
          <div className="about-split__copy">
            <span className="eyebrow">Our Story</span>
            <h2>One of the region's pioneer training centers</h2>
            <p>
              Anmar Training &amp; Consultation Center is considered one of
              the pioneer centers in the field of training, development and
              consultation. It was established on a high level of scientific
              and vocational basis with clear purpose: to support our
              partners in human resources development across administrative,
              technical and vocational aspects, altogether.
            </p>
            <p>
              In this regard, so many efforts were provided with the best
              international experience in the design of training programs and
              through efficient, authorized specialists — so that every
              program we deliver reflects real, applicable expertise rather
              than generic content.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>Built on substance, not slides</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((p) => (
              <div key={p.title} className="card pillar-card">
                <div className="pillar-card__icon"><Icon name={p.icon} size={22} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow">Work With Us</span>
            <h2>Let's talk about your team's development goals</h2>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/vision" className="btn btn-outline">Our Vision</Link>
          </div>
        </div>
      </section>
    </>
  );
}
