import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import React from "react";
function ParticlesBackground(props) {
  return <Particles params={particlesConfig}></Particles>;
}

export default ParticlesBackground;
