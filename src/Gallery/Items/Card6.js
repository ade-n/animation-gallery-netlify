import React from "react";
import { Spring, animated } from "react-spring/renderprops";

import CardTemplate from "../CardTemplate";

class Card6 extends React.Component {
  state = { toggle: false };

  onToggle = () => this.setState((state) => ({ toggle: !state.toggle }));

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="auto-main w-64 h-64 shadow-xl mx-auto ">
          <div className="bg-pink-400 w-full">
            <div
              className="p-2 text-white font-bold no-underline cursor-pointer"
              onClick={this.onToggle}
            >
              Toggle Menu
            </div>
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
        <CardTemplate link="/card6" title="Drop Down Menu" />
      </div>
    );
  }
}

export default Card6;
