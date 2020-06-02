import React from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate";

const Card2 = () => {
  const props = useSpring({
    x: 0,
    from: { x: 100 },
    config: { duration: 3000 },
  });
  return (
    <div>
      <div className="flex items-center w-64 h-64 shadow-xl text-center overflow-hidden">
        <animated.svg
          className="stroke-current text-pink-400 h-32 w-32 mx-auto inline-block "
          viewBox="0 0 20 20"
          preserveAspectRatio="xMidYMid meet"
          fill="white"
          strokeDashoffset={props.x}
        >
          <path
            className=""
            strokeWidth="0.3"
            strokeDasharray="100"
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </animated.svg>
      </div>
      <CardTemplate link="/card2" title="Stroke Path" />
    </div>
  );
};

export default Card2;
