import { Animate } from "react-simple-animate";
import { AboutContainer } from "../styled/aboutStyled";

export default function About() {
  return (
    <Animate
      play={true}
      duration={1}
      delay={0.3}
      start={{ opacity: "0", transform: "translate(0, 40px)" }}
      end={{ opacity: "1", transform: "translate(0, 0)" }}
      sequenceIndex={0}
      
    >
      <AboutContainer>
        <h1>Welcome Friends!</h1>
        <span>
          My name is Summer Watson, I'm a passionate web developer from North
          Carolina. I love to solve problems, create modifications, and tinker
          with technology. I am always thristy for knowledge and learning more
          about the world around us. I'd love to use my skills to help create
          wonderful websites. I have my beautiful black cat Cinder as my assistant
        </span>
      </AboutContainer>
    </Animate>
  );
}
