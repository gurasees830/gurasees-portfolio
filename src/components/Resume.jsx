import { certifications, education, experience, profile } from "../data.js";

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.title}>
          <span className="period">{item.period}</span>
          <h4>{item.title}</h4>
          <p className="place">{item.place}</p>
          {item.text && <p>{item.text}</p>}
        </li>
      ))}
    </ol>
  );
}

function Resume() {
  return (
    <section className="section alt" aria-labelledby="resume-title">
      <div className="container">
        <p className="eyebrow">Resume</p>
        <h2 id="resume-title">Experience and education</h2>

        <div className="resume-grid">
          <div>
            <h3>Experience</h3>
            <Timeline items={experience} />

            <h3>Education</h3>
            <Timeline items={education} />
          </div>

          <div>
            <h3>Certifications</h3>
            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <strong>{cert.title}</strong>
                  <span>
                    {cert.issuer}, {cert.year}
                  </span>
                </li>
              ))}
            </ul>

            <a className="btn btn-primary" href={profile.resume} download>
              Download resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
