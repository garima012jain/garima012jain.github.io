import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Founding Engineer",
          "Backend Developer",
          "Generative AI Enthusiast",
          "Full Stack Engineer",
          "Ex-Google SWE",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
