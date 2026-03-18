import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiLinux,
  SiGooglecloud,
  SiRabbitmq,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
      </Col>
    </Row>
  );
}

export default Toolstack;
