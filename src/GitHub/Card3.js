import React from "react";
import { useSpring, animated } from "react-spring";

const Card3 = () => {
  const [state, toggle] = React.useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div className="flex items-center" onClick={() => toggle(!state)}>
      <animated.div
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
          className="fill-current text-pink-400 h-64 w-64  "
          viewBox="0 0 24 24"
        >
          <path
            stroke-width="0.5"
            strokeDasharray="100"
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </svg>
      </animated.div>
    </div>
  );
};

export default Card3;
