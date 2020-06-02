import React from "react";
import { useSpring, animated } from "react-spring";

import CardPageTemplate from "./CardPageTemplete";

const Card2Page = () => {
  const props = useSpring({
    x: 0,
    from: { x: 100 },
    config: { duration: 3000 },
  });
  return (
    <div className="flex justify-between mx-auto sm:w-3/5 pt-24">
      <CardPageTemplate
        codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6 "
        codePenLink="https://codesandbox.io/s/stroke-path-cirw5?file=/src/App.js"
        gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
        gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card2/Card2.js"
        title="Card2 - Stroke Path"
      />
      <div className="flex items-center">
        <animated.svg
          className="stroke-current text-pink-400 h-64 w-64"
          viewBox="0 0 24 24"
          fill="white"
          strokeDashoffset={props.x}
        >
          <path
            stroke-width="0.5"
            strokeDasharray="100"
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </animated.svg>
      </div>
    </div>
  );
};

export default Card2Page;
