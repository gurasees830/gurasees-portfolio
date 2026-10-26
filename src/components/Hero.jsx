import { profile } from "../data.js";

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Portfolio 2026 · {profile.location}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">
            {profile.role} <span aria-hidden="true">·</span> Data Analytics AI Intern
          </p>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my projects
            </a>
            <a className="btn btn-outline" href={profile.resume} download>
              Download resume
            </a>
          </div>

          <ul className="social" aria-label="Social links">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </div>

        <div className="hero-badge" aria-hidden="true">
          <span>GB</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
