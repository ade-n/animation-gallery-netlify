import React from "react";
import { useSpring, animated } from "react-spring";

const Card2 = () => {
  const props = useSpring({
    from: { background: "linear-gradient(to top, #f5f7fa, #c3cfe2)" },
    x: 0,
    from: { x: 100 },
    config: { duration: 3000 },
  });
  return (
    <div>
      <div className="flex items-center w-64 h-64 shadow-xl">
        <animated.svg
          className="h-32 w-32 block mx-auto flex "
          viewBox="0 0 24 24"
          fill="white"
          strokeDashoffset={props.x}
        >
          <path
            stroke="pink"
            stroke-width="0.5"
            strokeDasharray="100"
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </animated.svg>
      </div>
    </div>
  );
};

export default Card2;
