import React from "react";
import { Spring } from "react-spring/renderprops";

import CardTemplate from "../CardTemplate";

class Card5 extends React.Component {
  state = { toggle: false };
  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="flex items-center w-64 h-64 shadow-xl mx-auto ">
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
                className="font-bold text-2xl cursor-pointer w-full h-full flex items-center "
                onClick={this.toggle}
                style={{
                  background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
                  ...rest,
                }}
              >
                <div className="text-white font-bold text-2xl px-12 ">
                  Change the background color
                </div>
              </div>
            )}
          </Spring>
        </div>
        <CardTemplate link="/card5" title="Dynamic Background" />
      </div>
    );
  }
}

export default Card5;
