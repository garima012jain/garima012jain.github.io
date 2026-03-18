import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import experiences from "./experienceData";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong> Timeline
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          A journey through my professional and leadership roles.
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
