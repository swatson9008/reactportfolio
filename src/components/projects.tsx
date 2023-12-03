import { Animate } from "react-simple-animate";
import { ProjectContainer, ProjectGrid, PGridItem } from "../styled/projectStyled";
import pokedexProject from '../assets/pokedex.png'

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
            <img src={pokedexProject} alt="" />
            <h2>Pokedex</h2>
            <span><a href="https://pokedexts.vercel.app/">Live Demo</a> || <a href="https://github.com/swatson9008/pokedexts">Repo</a></span>
            <span>A Pokedex written in React and Typescript. Contains information for nine generations of Pokemon, details for their moves, automatically generates links for moveset suggestions, filtering and dark mode.</span>
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
