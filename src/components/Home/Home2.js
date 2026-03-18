import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              I am currently working as a{" "}
              <b className="purple">Founding Engineer at Anyteam</b>, an
              early-stage startup.
              <br />
              <br />
              I am an IIT Patna alumnus with a B.Tech in CSE (CGPA: 8.71). I
              love building scalable backend systems and exploring Generative AI.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C++, Java, TypeScript, and JavaScript.{" "}
                </b>
              </i>
              <br />
              <br />
              My past work experience:
              <br />
              <li>
                <b className="purple">Software Engineer</b> at Venwiz
                Technologies
              </li>
              <li>
                <b className="purple">Software Engineer II</b> at Google India
                (Google Pay)
              </li>
              <li>
                <b className="purple">Software Engineer Intern</b> at Google
                (Ads & GPay)
              </li>
              <br />I love solving complex problems and building things that
              make an impact!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              Feel free to <span className="purple">reach out</span> to me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/garima012jain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/garima-jain-93941316a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:garimaj012@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
