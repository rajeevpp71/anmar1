import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { companyFacts } from "../data/accreditations.js";
import "./pages.css";
import "./contact.css";

const info = [
  { icon: "pin", title: "Location", text: companyFacts.address },
  { icon: "phone", title: "Phone", text: `${companyFacts.phones.join(" / ")} · Mobile ${companyFacts.mobile}` },
  { icon: "mail", title: "Email", text: companyFacts.email },
  { icon: "clock", title: "Working Hours", text: "Sunday – Thursday, 8:00 AM – 4:00 PM" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's talk about your training goals</h1>
          <p>
            Reach out about public courses, in-house programs, or a
            consulting engagement — our team will follow up shortly.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            {info.map((i) => (
              <div key={i.title} className="card contact-info__item">
                <div className="contact-info__icon"><Icon name={i.icon} size={20} /></div>
                <div>
                  <h4>{i.title}</h4>
                  <p>{i.text}</p>
                </div>
              </div>
            ))}
            <div className="contact-map">
              <iframe
                title="Anmar Training Center location"
                src={`https://maps.google.com/maps?q=${companyFacts.mapQuery}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="card contact-form">
            {sent ? (
              <div className="contact-form__success">
                <Icon name="check" size={30} />
                <h3>Thank you</h3>
                <p>Your message has been noted. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Send us a message</h3>
                <div className="contact-form__row">
                  <label>
                    Full Name
                    <input type="text" required placeholder="Your name" />
                  </label>
                  <label>
                    Company
                    <input type="text" placeholder="Organization (optional)" />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label>
                    Email
                    <input type="email" required placeholder="you@company.com" />
                  </label>
                  <label>
                    Phone
                    <input type="tel" placeholder="+966 ..." />
                  </label>
                </div>
                <label>
                  Message
                  <textarea rows={5} required placeholder="Tell us what you're looking for" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send Message <Icon name="arrow" size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
