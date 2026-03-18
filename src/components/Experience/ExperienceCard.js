import React from "react";
import Card from "react-bootstrap/Card";

const typeColors = {
  work: "#c770f0",
  internship: "#7b68ee",
  academic: "#20c997",
  leadership: "#fd7e14",
};

function ExperienceCard({ experience }) {
  const dotColor = typeColors[experience.type] || "#c770f0";

  return (
    <div className="timeline-item">
      <div className="timeline-dot" style={{ backgroundColor: dotColor }} />
      <Card className="experience-card">
        <Card.Body>
          <Card.Title>{experience.title}</Card.Title>
          <Card.Subtitle>
            {experience.company} | {experience.duration}
          </Card.Subtitle>
          <Card.Text as="div">
            <ul>
              {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Card.Text>
          <span
            className="experience-type-badge"
            style={{ backgroundColor: dotColor }}
          >
            {experience.type}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard;
