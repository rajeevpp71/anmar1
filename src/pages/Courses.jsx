import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { courseCategories } from "../data/courses.js";
import "./pages.css";
import "./courses.css";

export default function Courses() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Public Courses</span>
          <h1>13 categories. One training philosophy.</h1>
          <p>
            Every category below is delivered as public open-enrollment
            sessions, and can be tailored into an in-house program on
            request.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Public Courses</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalog-grid">
            {courseCategories.map((c) => (
              <div key={c.slug} id={c.slug} className="card catalog-card">
                <div className="catalog-card__icon">
                  <Icon name={c.icon} size={24} />
                </div>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <Link to="/apply" className="catalog-card__link">
                  Apply for a course in this track <Icon name="arrow" size={14} strokeWidth={2.2} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow">Custom Programs</span>
            <h2>Don't see exactly what you need?</h2>
            <p>We design custom and in-house tracks around specific roles and capability gaps.</p>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
