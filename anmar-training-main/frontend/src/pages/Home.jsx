import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import building from "../assets/building.jpg";
import { courseCategories } from "../data/courses.js";
import "./home.css";

const values = [
  {
    icon: "target",
    title: "Training & Development",
    text: "Hard training is the foundation for any effective and distinct career.",
  },
  {
    icon: "compass",
    title: "Be Creative",
    text: "Improve your creativity and innovation to stay distinct in your field.",
  },
  {
    icon: "gear",
    title: "Be More Efficient",
    text: "Develop the abilities to work smarter and lift your output.",
  },
  {
    icon: "check",
    title: "Your Success Is Our Goal",
    text: "Our goal is always to become a genuine partner in your success.",
  },
];

const badges = [
  { icon: "people", label: "In Association with AVT Academy" },
  { icon: "shield", label: "NEBOSH Learning Partner — Bronze" },
  { icon: "compass", label: "Certified, Experienced Trainers" },
  { icon: "chart", label: "International Best Practice" },
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ "--hero-img": `url(${building})` }}>
        <div className="hero__scrim" />
        <div className="container hero__inner">
          <span className="eyebrow eyebrow--light">Anmar Int'l Center for Training &amp; Consultation</span>
          <h1>
            Be Creative and Distinct <span>in Your Field</span>
          </h1>
          <p>
            One of the region's pioneer centers in training, development and
            consultation — built on a high level of scientific and vocational
            expertise, with clear purpose: developing your people across
            administrative, technical and vocational fields.
          </p>
          <div className="hero__actions">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses <Icon name="arrow" size={16} />
            </Link>
            <Link to="/apply" className="btn btn-outline">
              Apply for a Course
            </Link>
          </div>
        </div>
      </section>

      <section className="badges">
        <div className="container badges__row">
          {badges.map((b) => (
            <div key={b.label} className="badges__item">
              <Icon name={b.icon} size={18} />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <div className="about-split__media">
            <img src={building} alt="Anmar Training Center — Business Tower, Jubail" />
            <div className="about-split__card">
              <strong>13</strong>
              <span>Specialized course categories</span>
            </div>
          </div>
          <div className="about-split__copy">
            <span className="eyebrow">Who We Are</span>
            <h2>A pioneer center for training, development &amp; consultation</h2>
            <p>
              Anmar Training &amp; Consultation Center is considered one of the
              pioneer centers in the field of training, development and
              consultation. It was established on a high level of scientific
              and vocational basis, with clear purpose: supporting our
              partners in human resources development across administrative,
              technical and vocational aspects.
            </p>
            <p>
              So many efforts were provided with the best international
              experience in the design of training programs, delivered by
              efficient, authorized specialists.
            </p>
            <Link to="/about" className="btn btn-ghost">
              Read Our Story <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Why Anmar</span>
            <h2>Four commitments behind every program</h2>
          </div>
          <div className="value-grid">
            {values.map((v) => (
              <div key={v.title} className="card value-card">
                <div className="value-card__icon">
                  <Icon name={v.icon} size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: "none" }}>
            <div>
              <span className="eyebrow">Public Courses</span>
              <h2>Programs across every core discipline</h2>
            </div>
            <Link to="/courses" className="btn btn-ghost btn-sm">
              View All Categories
            </Link>
          </div>
          <div className="course-grid">
            {courseCategories.slice(0, 8).map((c) => (
              <Link key={c.slug} to={`/courses#${c.slug}`} className="card course-card">
                <div className="course-card__icon">
                  <Icon name={c.icon} size={22} />
                </div>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <span className="course-card__link">
                  Learn more <Icon name="arrow" size={14} strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow">Get Started</span>
            <h2>Ready to upgrade your capabilities?</h2>
            <p>Join a public course or talk to us about a tailored, in-house program for your organization.</p>
          </div>
          <div className="cta__actions">
            <Link to="/apply" className="btn btn-primary">Apply for a Course</Link>
            <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
