import { Animate } from "react-simple-animate";
import { ProjectContainer } from "../styled/projectStyled";
import calcProject from '../assets/'

export default function Projects() {
  return (
    <Animate
      play={true}
      duration={1}
      delay={0.3}
      start={{ opacity: "0", transform: "translate(0, 40px)" }}
      end={{ opacity: "1", transform: "translate(0, 0)" }}
      sequenceIndex={0}
    >
      <ProjectContainer>
        <div>
          <div>
            <img src={calcProject} alt="" />
            <h2>Calculator</h2>
            <span>Live Demo</span>
            <span>A calculator created using React, Typescript, and Vite</span>
          </div>
        </div>
      </ProjectContainer>
    </Animate>
  );
}
