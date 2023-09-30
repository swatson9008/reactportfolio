import { IntroContainer } from "../styled/introStyled";
import { Animate, AnimateGroup } from "react-simple-animate";

export default function Intro({ play, onCompleteCallBack }) {
  return (
    <IntroContainer>
      <AnimateGroup play>
        <div>
          <Animate
            play={true}
            duration={1}
            delay={0.3}
            start={{ opacity: "0", transform: "translate(0, 40px)" }}
            end={{ opacity: "1", transform: "translate(0, 0)" }}
            sequenceIndex={0}
            onComplete={onCompleteCallBack}
          >
            <h1>Summer Watson</h1>
          </Animate>
          <Animate
            play={true}
            duration={1}
            delay={0.3}
            start={{ opacity: "0", transform: "translate(0, 40px)" }}
            end={{ opacity: "1", transform: "translate(0, 0)" }}
            sequenceIndex={1}
            onComplete={onCompleteCallBack}
          >
            <h2>front end web developer</h2>
          </Animate>
        </div>
      </AnimateGroup>
    </IntroContainer>
  );
}
