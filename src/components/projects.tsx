import { Animate } from "react-simple-animate";
import { ProjectContainer, ProjectGrid, PGridItem } from "../styled/projectStyled";

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
        <ProjectGrid>
          <PGridItem>
            <img src={Pokedex} alt="" />
            <h2>Calculator</h2>
            <span><a href="https://inspiring-tarsier-7131e7.netlify.app/"> Live Demo</a></span>
            <span>A calculator created using React, Typescript, and Vite. Has a dark mode implemented.</span>
          </PGridItem>
          <PGridItem>

          </PGridItem>
          <PGridItem>

          </PGridItem>
          <PGridItem>

          </PGridItem>
        </ProjectGrid>
      </ProjectContainer>
    </Animate>
  );
}
