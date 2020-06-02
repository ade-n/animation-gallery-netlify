import React from "react";
import { useSpring, animated } from "react-spring";

import CardPageTemplate from "./CardPageTemplete";

const Card4Page = () => {
  const props = useSpring({
    from: { background: "linear-gradient(to top, #f5f7fa, #c3cfe2)" },
  });
  return (
    <animated.div className=" h-screen" style={props}>
      <div class="flex justify-between mx-auto sm:w-3/5 pt-24">
        <CardPageTemplate
          codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6 "
          codePenLink="https://codesandbox.io/s/gradient-static-background-j15f2?file=/src/App.js"
          gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
          gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card4/Card4.js"
          title="Card4 - Static Background"
        />
        <div className="flex justify-between w-48">
          <ul className="flex flex-col justify-between text-gray-700 font-mono  text-xl">
            <li>#F5F7FA</li>
            <li>#C3CFE2</li>
          </ul>
          <animated.div
            className="w-24 h-42  bg-blue-200 shadow-md "
            style={props}
          ></animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default Card4Page;
