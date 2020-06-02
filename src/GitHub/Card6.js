import React from "react";

import { Spring, animated } from "react-spring/renderprops";

class Card6 extends React.Component {
  state = { toggle: false, toggleAbout: false };

  onToggle = () => this.setState((state) => ({ toggle: !state.toggle }));
  onToggleAbout = () =>
    this.setState((state) => ({ toggleAbout: !state.toggleAbout }));

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="flex justify-between mx-auto sm:w-3/5 pt-24">
          <div className="auto-main w-64 h-64  ">
            <div className="bg-pink-400 w-full">
              <div
                className="p-2 text-white font-bold cursor-pointer"
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
        </div>
      </div>
    );
  }
}

export default Card6;
