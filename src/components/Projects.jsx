import { useState } from "react";
import { profile, projects } from "../data.js";
import ProjectCard from "./ProjectCard.jsx";

const filters = ["All", "Internship", "Personal", "Team"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section alt" aria-labelledby="projects-title">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">Built at Addler and on my own</h2>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((name) => (
            <button
              key={name}
              className={filter === name ? "chip active" : "chip"}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {shown.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="more">
          More of my code is on{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Projects;
