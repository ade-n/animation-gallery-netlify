import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate";

const Card3 = () => {
  const [open, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: open ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div>
      <div className="flex items-center w-64 h-64 shadow-xl text-center">
        <animated.div
          onClick={() => toggle(!open)}
          className="w-full mx-auto cursor-pointer"
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        >
          <svg
            className="fill-current text-pink-400 inline-block h-32 w-32 "
            viewBox="0 0 20 20"
          >
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
          </svg>
        </animated.div>
      </div>
      <CardTemplate link="/card3" title="Beating Heart" />
    </div>
  );
};

export default Card3;

/*<div>
      <div className="flex items-center w-64 h-64 shadow-xl text-center">
        <animated.div
          onClick={() => toggle(!open)}
          className="w-full mx-auto cursor-pointer"
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        >
          <svg
            className="fill-current text-pink-400 inline-block h-32 w-32 "
            viewBox="0 0 24 24"
          >
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
          </svg>
        </animated.div>
      </div>
      <CardTemplate link="/card3" title="Beating Heart" />
    </div>*/
