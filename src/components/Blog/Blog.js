import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { BsPencilSquare } from "react-icons/bs";

function Blog() {
  const topics = [
    "Backend Architecture & System Design",
    "Competitive Programming Tips & Tricks",
    "LLM Cost Optimization in Production",
    "Lessons from Working at Google",
    "Building Scalable Data Pipelines",
  ];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", textAlign: "center" }}>
          <Col md={8}>
            <BsPencilSquare className="blog-icon" />
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              <strong className="purple">Blog</strong> — Coming Soon!
            </h1>
            <p style={{ color: "white", fontSize: "1.2em", lineHeight: "1.8" }}>
              I'm working on writing about the things I've learned along the
              way. Here's a sneak peek at what's coming:
            </p>
            <ul className="blog-topics">
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <p
              style={{
                color: "#a588c0",
                fontSize: "1em",
                marginTop: "30px",
                fontStyle: "italic",
              }}
            >
              Stay tuned — first post dropping soon!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
