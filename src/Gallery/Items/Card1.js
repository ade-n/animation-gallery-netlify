import React from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate";

const Card1 = () => {
  const animate = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  return (
    <div>
      <div className="flex items-center w-64 h-64 shadow-xl">
        <animated.div
          className=" text-pink-400 text-center font-bold text-2xl px-4"
          style={animate}
        >
          REFRESH TO SEE ME FADING
        </animated.div>
      </div>
      <CardTemplate link="/card1" title="Auto Fading" />
    </div>
  );
};

export default Card1;
