import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am{" "}
            <span className="purple">Garima Jain</span> from{" "}
            <span className="purple">Bengaluru, India.</span>
            <br />
            <br />
            I graduated in May 2022 from{" "}
            <span className="purple">
              Indian Institute of Technology, Patna
            </span>{" "}
            with a B.Tech in Computer Science and Engineering (CGPA: 8.71).
            <br />
            <br />
            Currently, I'm a{" "}
            <span className="purple">Founding Engineer at Anyteam</span>, where
            I'm building LLM cost attribution systems, full-stack WebSocket
            architectures, and enterprise-grade AI-powered development
            environments using Claude Code, custom MCP servers, and Docker
            Compose orchestration across an 8-repo platform.
            <br />
            <br />
            Previously at{" "}
            <span className="purple">Venwiz Technologies</span>, I architected
            scalable vendor data pipelines processing 4,000 vendors/hour using
            AWS, built an AI-powered search engine with 85% relevance across 1M+
            vendors, and designed high-throughput web scraping infrastructure
            handling 5,000+ websites/hour.
            <br />
            <br />
            At <span className="purple">Google (Google Pay)</span>, I worked on
            the UPI Autopay Platform team, launching compliance features
            impacting 10K+ subscriptions and developing subscription creation
            flows integrating multiple 1P clients, using Java, gRPC, Spanner,
            and Protocol Buffers.
            <br />
            <br />
            I'm an avid competitive programmer &mdash;{" "}
            <span className="purple">
              4-star on CodeChef, Expert on Codeforces
            </span>
            , ICPC Amritapuri Regionals rank 175, and Google Kickstart global
            rank 666. I was selected among 40 interns across India for{" "}
            <span className="purple">Google's STEP internship</span>.
            <br />
            <br />
            Beyond my industry roles, I served as a{" "}
            <span className="purple">Teaching Assistant at Scaler Academy</span>{" "}
            (Jan 2022 – Jun 2023), mentoring 200+ students in DSA and problem
            solving. I also led campus placements as{" "}
            <span className="purple">
              Asst. Head Coordinator of the Training & Placement Cell
            </span>{" "}
            at IIT Patna (Jul 2020 – Apr 2022).
            <br />
            <br />
            Apart from coding, some other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Generative AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring & Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music & Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
          </ul>
          <p style={{ color: "#a588c0", marginTop: "15px", fontStyle: "italic" }}>
            "The only way to do great work is to love what you do." – Steve Jobs
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
