import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { courseCategories } from "../data/courses.js";
import "./pages.css";

const formats = [
  {
    icon: "people",
    title: "Public Courses",
    text: "Open enrollment programs across 13 categories, scheduled through the year for individual professionals and small teams.",
  },
  {
    icon: "building",
    title: "In-House Programs",
    text: "Delivered on your premises and tailored to your organization's processes, terminology and real work scenarios.",
  },
  {
    icon: "gear",
    title: "Customized Curriculum",
    text: "Content adapted to a specific role, department or capability gap, rather than a one-size-fits-all course.",
  },
  {
    icon: "shield",
    title: "Certified Delivery",
    text: "Programs run by authorized, experienced specialists — including our NEBOSH-affiliated HSE track.",
  },
];

export default function Training() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Training</span>
          <h1>Training built for real capability, not attendance certificates</h1>
          <p>
            Public, in-house and customized programs across administrative,
            technical and vocational fields — designed on a scientific basis
            and delivered by authorized specialists.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Training</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">How We Deliver</span>
            <h2>Four formats, one training philosophy</h2>
          </div>
          <div className="pillar-grid pillar-grid--4">
            {formats.map((f) => (
              <div key={f.title} className="card pillar-card">
                <div className="pillar-card__icon"><Icon name={f.icon} size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: "none" }}>
            <div>
              <span className="eyebrow">Coverage</span>
              <h2>13 categories across every core discipline</h2>
            </div>
            <Link to="/courses" className="btn btn-ghost btn-sm">Browse All Courses</Link>
          </div>
          <div className="chip-grid">
            {courseCategories.map((c) => (
              <Link key={c.slug} to={`/courses#${c.slug}`} className="chip">
                <Icon name={c.icon} size={16} /> {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2>Bring a program to your organization</h2>
          </div>
          <div className="cta__actions">
            <Link to="/apply" className="btn btn-primary">Apply for a Course</Link>
            <Link to="/consulting" className="btn btn-outline">Explore Consulting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
