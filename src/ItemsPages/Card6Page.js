import React from "react";
import { Spring, animated } from "react-spring/renderprops";

import CardPageTemplate from "./CardPageTemplete";

class Card6Page extends React.Component {
  state = { toggle: false, toggleAbout: false };

  onToggle = () => this.setState((state) => ({ toggle: !state.toggle }));
  onToggleAbout = () =>
    this.setState((state) => ({ toggleAbout: !state.toggleAbout }));

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="flex justify-between mx-auto sm:w-3/5 pt-24">
          <CardPageTemplate
            codePenSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6 "
            codePenLink="https://codesandbox.io/s/drop-down-menu-enni4?file=/src/App.js"
            gitHubSVG="fill-current text-pink-400 hover:text-gray-500 inline-block h-12 w-12 mr-6"
            gitHubLink="https://github.com/alex-svg/Animations-Gallery/blob/Card6/Card6.js"
            title="Card6 - Drop Down Menu"
          />
          <div className="auto-main w-64 h-64  ">
            <div className="bg-pink-400 w-full">
              <button
                className="p-2 text-white font-bold"
                onClick={this.onToggle}
              >
                Toggle Menu
              </button>
            </div>

            <Spring
              native
              force
              config={{ tension: 2000, friction: 100, precision: 1 }}
              from={{ height: toggle ? 0 : "auto" }}
              to={{ height: toggle ? "auto" : 0 }}
            >
              {(props) => (
                <animated.div
                  className="overflow-hidden text-pink-500 px-2 font-bold"
                  style={props}
                >
                  <div>About</div>
                  <div>Gallery</div>
                  <div>Contact</div>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      </div>
    );
  }
}

export default Card6Page;
