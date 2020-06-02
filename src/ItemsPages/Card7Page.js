import React from "react";
import { useSpring, animated } from "react-spring";

import CardPageTemplate from "./CardPageTemplete";

const Card6Page = () => {
  const [state, toggle] = React.useState(false);

  const { height } = useSpring({
    from: {
      height: "0%",
    },
    to: {
      height: state ? "100%" : "0%",
    },
    config: { duration: 800 },
  });

  return (
    <div>
      <div className="flex justify-between mx-auto sm:w-3/5 pt-24">
        <CardPageTemplate
          codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6 "
          codePenLink="https://codesandbox.io/s/drop-down-background-imcfm?file=/src/App.js"
          gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
          gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card7/Card7%20-%20Drop%20Down%20Background%20.js"
          title="Card7 - Drop Down Background"
        />
        <div className="auto-main w-64 h-64  ">
          <animated.div
            style={{
              height,
            }}
            className="w-full bg-pink-400 h-full"
          >
            <div className="bg-pink-400 ">
              <div
                className="p-2 text-white font-bold no-underline cursor-pointer"
                onClick={() => toggle(!state)}
              >
                Toggle
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Card6Page;
