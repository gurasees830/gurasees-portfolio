import { skillGroups } from "../data.js";

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">The tools I work with</h2>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
