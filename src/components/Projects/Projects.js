import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work & Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some key projects and systems I've built:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="LLM Cost Attribution System"
              company="Anyteam"
              description="Spearheaded a Langfuse-based LLM cost attribution system across 7 microservices, integrating traceability for 6 AI providers (OpenAI, Anthropic, Gemini, Perplexity, DeepSeek, ElevenLabs) with per-user spend tracking. Fixed a context propagation bug that left ~65% of API calls unattributed."
              techStack="React, Node.js, FastAPI, WebSocket, Langfuse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="WebSocket Response Correlation"
              company="Anyteam"
              description="Engineered a full-stack WebSocket response correlation system with a 3-level priority matching protocol, resolving race conditions across 8 concurrent message flows. Eliminated silently dropped AI responses and fixed async context leaks."
              techStack="React, TypeScript, Python, FastAPI, asyncio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AI-Powered Dev Environment"
              company="Anyteam"
              description="Built an enterprise-grade AI-powered development environment using Claude Code, custom MCP servers (Langfuse x5, Context7, Atlassian), Slack API session tracking, Docker Compose orchestration, and git worktree isolation across an 8-repo platform."
              techStack="Claude Code, MCP, Docker, Slack API, Git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Vendor Data Enrichment Pipeline"
              company="Venwiz Technologies"
              description="Architected and deployed a scalable vendor data enrichment pipeline and orchestration service from scratch, increasing vendor coverage from 30K to over 200K. Achieved a processing rate of 4,000 vendors/hour and reduced manual effort by 99%."
              techStack="AWS (SNS, SQS, EKS, S3), NestJS, MongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AI-Powered Vendor Search Engine"
              company="Venwiz Technologies"
              description="Engineered an AI-powered vendor search engine achieving 85% search relevance across 1M+ vendors with 4-5 second response time, slashing vendor scouting time from 10 days to 1 day. Explored Neo4j for graph-based categorization and semantic search."
              techStack="Elasticsearch, OpenAI, Neo4j, Vector DB, NestJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Web Scraping Infrastructure"
              company="Venwiz Technologies"
              description="Designed and scaled a high-throughput web scraping infrastructure on AWS, re-architecting from Requests/BeautifulSoup to Crawlee, eliminating child link fan-outs, resolving MongoDB bottlenecks, and achieving 5,000+ websites/hour throughput."
              techStack="AWS, Crawlee, Scrapy, MongoDB, Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Vendor Intelligence Platform"
              company="Venwiz Technologies"
              description="Built and shipped a client-facing, AI-driven Vendor Intelligence platform in a two-week sprint with a 4-person team, owning full-stack development of key features like concurrent-safe subscription management and AWS S3-optimized bulk vendor addition."
              techStack="NestJS, React, AWS S3, MongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="UPI Autopay Compliance Feature"
              company="Google India (Google Pay)"
              description="Designed, implemented and launched compliance feature from NPCI that disables revoke functionality on subscriptions belonging to loan and debt collection merchants, impacting 10K+ subscriptions across 20 merchants."
              techStack="Java, gRPC, Protocol Buffers, Spanner, Guice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Subscription Creation Flow"
              company="Google India (Google Pay)"
              description="Designed and developed the subscription creation flow to integrate various 1P clients (billpay, mobile recharge, fast tag, loans etc.) with Autopay. Involved extensive collaboration with frontend and client teams."
              techStack="Java, gRPC, Spanner, JUnit, Mockito"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
