import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate";

const Card7 = () => {
  const [state, toggle] = useState(false);

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
      <div className="w-64 h-64 shadow-xl mx-auto ">
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
      <CardTemplate link="/card7" title="Drop Down Background" />
    </div>
  );
};

export default Card7;
