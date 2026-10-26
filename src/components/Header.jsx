import { useState } from "react";
import { navLinks, profile } from "../data.js";
import useActiveSection from "./useActiveSection.js";

const ids = navLinks.map((link) => link.id);

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">GB</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <button
          className="menu-button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? "active" : ""}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
