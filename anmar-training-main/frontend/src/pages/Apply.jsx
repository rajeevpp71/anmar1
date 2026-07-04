import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { courseCategories } from "../data/courses.js";
import "./pages.css";
import "./apply.css";

export default function Apply() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Apply</span>
          <h1>Apply for a Course</h1>
          <p>
            Tell us which track interests you and how to reach you — our team
            will confirm the next available intake.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Apply for Course</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container apply-wrap">
          <div className="card apply-form">
            {sent ? (
              <div className="contact-form__success">
                <Icon name="check" size={30} />
                <h3>Application received</h3>
                <p>Thank you — our team will contact you shortly to confirm your enrollment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label>
                    Full Name
                    <input type="text" required placeholder="Your name" />
                  </label>
                  <label>
                    Company / Organization
                    <input type="text" placeholder="Optional" />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label>
                    Email
                    <input type="email" required placeholder="you@company.com" />
                  </label>
                  <label>
                    Phone
                    <input type="tel" required placeholder="+966 ..." />
                  </label>
                </div>
                <label>
                  Course Category
                  <select required defaultValue="">
                    <option value="" disabled>Select a category</option>
                    {courseCategories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Notes
                  <textarea rows={4} placeholder="Preferred dates, specific course, or anything else we should know" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit Application <Icon name="arrow" size={15} />
                </button>
              </form>
            )}
          </div>

          <aside className="apply-aside">
            <div className="card apply-aside__card">
              <h4>Prefer an in-house program?</h4>
              <p>We can tailor any category into a private program delivered at your organization.</p>
              <Link to="/contact" className="btn btn-ghost btn-sm">Contact Us Instead</Link>
            </div>
            <div className="card apply-aside__card">
              <h4>Not sure which track fits?</h4>
              <p>Browse the full catalog of 13 categories before you apply.</p>
              <Link to="/courses" className="btn btn-ghost btn-sm">View All Courses</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
