import React from "react";
import { useSpring, animated } from "react-spring";

import CardTemplate from "../CardTemplate";

const Card4 = () => {
  const props = useSpring({
    from: { background: "linear-gradient(to top, #f5f7fa, #c3cfe2)" },
  });

  return (
    <div>
      <div className="flex items-center w-64 h-64 shadow-xl">
        <animated.div className="flex items-center h-full" style={props}>
          <div className="text-pink-400 font-bold text-2xl px-12">
            Static background
          </div>
        </animated.div>
      </div>
      <CardTemplate link="/card4" title="Static Background" />
    </div>
  );
};

export default Card4;
