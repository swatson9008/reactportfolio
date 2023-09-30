import { Animate } from "react-simple-animate";
import { AboutContainer } from "../styled/aboutStyled";

export default function Projects({ play, onCompleteCallBack }) {
  return (
    <Animate
      play={true}
      duration={1}
      delay={0.3}
      start={{ opacity: "0", transform: "translate(0, 40px)" }}
      end={{ opacity: "1", transform: "translate(0, 0)" }}
      sequenceIndex={0}
      onComplete={onCompleteCallBack}
    >
      <AboutContainer>
        <h1>Coming Soon!</h1>
      </AboutContainer>
    </Animate>
  );
}
