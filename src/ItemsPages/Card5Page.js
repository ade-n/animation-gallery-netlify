import React from "react";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

import CardPageTemplate from "./CardPageTemplete";

class Card5Page extends React.Component {
  state = { toggle: false };
  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="flex items-center w-full h-screen shadow-xl mx-auto ">
          <Spring
            from={{ color: "white" }}
            to={{
              start: toggle ? "#ddd6f3" : "#faaca8",
              end: toggle ? "#247BA0" : "#F3FFBD",
              stop: toggle ? "10%" : "20%",
            }}
          >
            {({ start, end, stop, ...rest }) => (
              <div
                className="w-full h-screen"
                style={{
                  background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
                  ...rest,
                }}
              >
                <div class="flex justify-between mx-auto sm:w-3/5 pt-24">
                  <CardPageTemplate
                    codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6 "
                    codePenLink="https://codesandbox.io/s/gradient-dynamic-background-zmwsr"
                    gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
                    gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card5/Card5.js"
                    title="Card5 - Dynamic Background"
                  />

                  <div className="flex justify-between w-48">
                    {toggle ? (
                      <ul className="flex flex-col justify-between text-gray-700 font-mono  text-xl ">
                        <li>#DDD6F3 </li>
                        <li>#247BA0</li>
                      </ul>
                    ) : (
                      <ul className="flex flex-col justify-between text-gray-700 font-mono  text-xl">
                        <li>#FAACA8 </li>
                        <li>#F3FFBD</li>
                      </ul>
                    )}

                    <animated.div
                      style={{
                        background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
                        ...rest,
                      }}
                      onClick={this.toggle}
                      className="w-24 h-42  bg-blue-200 shadow-md cursor-pointer"
                    ></animated.div>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default Card5Page;
