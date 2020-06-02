import React from "react";

import { useSpring, animated } from "react-spring";

import Card1 from "./Items/Card1";
import Card2 from "./Items/Card2";
import Card3 from "./Items/Card3";
import Card4 from "./Items/Card4";
import Card5 from "./Items/Card5";
import Card6 from "./Items/Card6";
import Card7 from "./Items/Card7";

const GalleryList = () => {
  const props = useSpring({
    to: { opacity: 0, scroll: 100 },
    from: { opacity: 1, scroll: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="w-full mx-auto pt-24 pb-12">
      <animated.ul
        scrollTop={props}
        className="sm:mx-auto sm:w-3/5 sm:h-auto sm:flex sm:flex-wrap justify-between"
      >
        <li>
          <Card1 />
        </li>
        <li>
          <Card2 />
        </li>
        <li>
          <Card3 />
        </li>
        <li>
          <Card4 />
        </li>

        <li>
          <Card5 />
        </li>
        <li>
          <Card6 />
        </li>

        <li>
          <Card7 />
        </li>
      </animated.ul>
    </div>
  );
};

export default GalleryList;
