import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import "./pages.css";

const services = [
  { icon: "people", title: "Organizational Development", text: "Assessing structure, roles and workflows to align teams with strategic goals." },
  { icon: "target", title: "HR Systems & Policy", text: "Building practical HR frameworks — from performance management to competency models." },
  { icon: "chart", title: "Training Needs Analysis", text: "Identifying real capability gaps before designing a single training hour." },
  { icon: "shield", title: "Quality & Compliance Advisory", text: "Guidance on quality, safety and regulatory practice grounded in international standards." },
];

const steps = [
  { n: "01", title: "Diagnose", text: "We start by understanding your operation, not by selling a template." },
  { n: "02", title: "Design", text: "A tailored plan — training, policy or structural — built around your goals." },
  { n: "03", title: "Deliver", text: "Execution by authorized specialists, on your timeline." },
  { n: "04", title: "Review", text: "Follow-up to confirm the change actually took hold." },
];

export default function Consulting() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Consulting</span>
          <h1>Consultation that starts with your operation, not our catalog</h1>
          <p>
            Practical human-resources and organizational consulting, built on
            the same scientific and vocational foundation as our training
            programs.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Consulting</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Advisory Services</span>
            <h2>Where we typically add the most value</h2>
          </div>
          <div className="pillar-grid pillar-grid--4">
            {services.map((s) => (
              <div key={s.title} className="card pillar-card">
                <div className="pillar-card__icon"><Icon name={s.icon} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our Process</span>
            <h2>A four-step engagement model</h2>
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.n} className="steps-grid__item">
                <span className="steps-grid__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow">Let's Talk</span>
            <h2>Tell us what your organization is working on</h2>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
