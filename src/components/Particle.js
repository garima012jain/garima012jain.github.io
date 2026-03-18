import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 1200,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.85,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
