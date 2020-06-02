import React from "react";
import { useSpring, animated } from "react-spring";

const Card7 = () => {
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
  );
};

export default Card7;
