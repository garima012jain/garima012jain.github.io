import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="garima012jain"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
        theme={{
          dark: ["#161b22", "#5a3d7a", "#7b52a0", "#9c6dc7", "#c770f0"],
        }}
      />
    </Row>
  );
}

export default Github;
