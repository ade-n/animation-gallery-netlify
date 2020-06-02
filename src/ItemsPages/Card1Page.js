import React from "react";
import { useSpring, animated } from "react-spring";

import CardPageTemplate from "./CardPageTemplete";

const Card1Page = () => {
  const animate = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  return (
    <div class="flex justify-between mx-auto sm:w-3/5 pt-24">
      <CardPageTemplate
        codePenLink="https://codepen.io/alex-svg/pen/MWazmxy"
        gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
        codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 "
        gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card1/Card1.js"
        title="Card1 - Auto Fading"
      />

      <animated.div
        className=" text-pink-400 text-center py-16 font-bold text-3xl"
        style={animate}
      >
        REFRESH TO SEE ME FADING
      </animated.div>
    </div>
  );
};

export default Card1Page;
