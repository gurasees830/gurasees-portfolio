function ProjectCard({ project }) {
  return (
    <article className="project">
      {/* The browser downloads the image only when the card is close to the screen */}
      <img
        src={project.cover}
        alt={`Cover image of ${project.title}`}
        width="640"
        height="400"
        loading="lazy"
        decoding="async"
      />

      <div className="project-body">
        <div className="project-meta">
          <span className="badge">{project.status}</span>
          <span className="kind">{project.kind}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="tagline">{project.tagline}</p>
        <p>{project.description}</p>

        <ul className="tags" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
