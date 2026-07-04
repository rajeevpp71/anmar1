import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import "./pages.css";

const values = [
  { icon: "compass", title: "Integrity", text: "We design and deliver programs with scientific rigor and honesty about outcomes." },
  { icon: "people", title: "Partnership", text: "Every client relationship is treated as a long-term partnership, not a transaction." },
  { icon: "gear", title: "Continuous Improvement", text: "Curricula evolve with international best practice across every discipline we teach." },
  { icon: "check", title: "Accountability", text: "Your success is our goal — measured in the capability we leave behind." },
];

export default function Vision() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Vision &amp; Mission</span>
          <h1>Shaping capable people, one program at a time</h1>
          <p>
            We aim to be the reference training and consultation partner for
            organizations that take human capital development seriously.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Vision</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement-grid">
          <div className="card statement-card">
            <div className="statement-card__icon"><Icon name="compass" size={24} /></div>
            <span className="eyebrow">Our Vision</span>
            <h2>To be a leading regional center for training, development and consultation.</h2>
            <p>
              Recognized for scientific rigor, authorized specialists, and
              training programs that hold up against international
              standards — not just certificates, but real capability.
            </p>
          </div>
          <div className="card statement-card">
            <div className="statement-card__icon"><Icon name="target" size={24} /></div>
            <span className="eyebrow">Our Mission</span>
            <h2>Support our partners in developing their people, deliberately.</h2>
            <p>
              We combine the best international experience with authorized
              specialists to design and deliver programs across
              administrative, technical and vocational fields — built around
              the outcomes our partners actually need.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What Guides Us</span>
            <h2>The values behind every program</h2>
          </div>
          <div className="pillar-grid pillar-grid--4">
            {values.map((v) => (
              <div key={v.title} className="card pillar-card">
                <div className="pillar-card__icon"><Icon name={v.icon} size={22} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
