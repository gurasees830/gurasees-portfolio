import { about, stats } from "../data.js";

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow">About me</p>
        <h2 id="about-title">Data, code and things that ship</h2>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <ul className="stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.note}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="roles">
          {about.roles.map((role) => (
            <article key={role.title} className="role">
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
