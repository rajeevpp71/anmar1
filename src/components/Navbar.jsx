import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { primaryNav, courseCategories } from "../data/courses.js";
import logo from "../assets/logo-banner.jpg";
import "./navbar.css";

const columns = [
  courseCategories.slice(0, 4),
  courseCategories.slice(4, 7),
  courseCategories.slice(7, 10),
  courseCategories.slice(10, 13),
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Anmar International Center for Training" />
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}

          <div
            className="navbar__mega"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className={`navbar__link navbar__mega-trigger ${coursesOpen ? "is-active" : ""}`}
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
            >
              Public Courses
              <Icon name="chevron" size={14} strokeWidth={2.4} />
            </button>

            {coursesOpen && (
              <div className="mega-panel">
                <div className="mega-panel__grid">
                  {columns.map((col, i) => (
                    <ul key={i} className="mega-panel__col">
                      {col.map((c) => (
                        <li key={c.slug}>
                          <Link to={`/courses#${c.slug}`}>
                            <Icon name={c.icon} size={17} />
                            <span>{c.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                <div className="mega-panel__footer">
                  <span>13 specialized categories, updated every intake</span>
                  <Link to="/courses" className="mega-panel__all">
                    View all courses <Icon name="arrow" size={15} strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="navbar__actions">
          <Link to="/apply" className="btn btn-primary btn-sm navbar__cta">
            Apply for Course
          </Link>
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <nav className="container">
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className="mobile-panel__link">
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-panel__group-title">Public Courses</div>
            <div className="mobile-panel__courses">
              {courseCategories.map((c) => (
                <Link key={c.slug} to={`/courses#${c.slug}`} className="mobile-panel__course">
                  {c.name}
                </Link>
              ))}
            </div>
            <Link to="/apply" className="btn btn-primary mobile-panel__cta">
              Apply for Course
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
