import React from "react";
import { useSpring, animated } from "react-spring";

const Card4 = () => {
  const props = useSpring({
    from: { background: "linear-gradient(to top, #f5f7fa, #c3cfe2)" },
  });
  return (
    <animated.div className=" h-screen" style={props}>
      <div>Static Background</div>
    </animated.div>
  );
};

export default Card4;
