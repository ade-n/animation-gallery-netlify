import React from "react";
import { Link } from "react-router-dom";

class CardTemplate extends React.Component {
  state = { like: 0, show: false };

  handleLike = () => {
    this.setState({ like: this.state.like + 1, show: true });
  };

  render() {
    const { link, title } = this.props;
    const { like, show } = this.state;

    return (
      <div>
        <div className="py-6 ">
          <div className=" flex justify-between">
            <div className="text-md text-gray-700 font-mono hover:text-pink-500">
              <Link to={link}>{title}</Link>
            </div>
            <div
              className="cursor-pointer no-underline"
              onClick={this.handleLike}
            >
              <svg
                className={
                  show
                    ? "h-8 w-8 fill-current text-pink-400 outline-none"
                    : "h-8 w-8 fill-current text-gray-400 outline-none"
                }
                viewBox="0 0 24 24"
              >
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className="text-sm text-gray-400">
              react-spring/ tailwindcss
            </div>
            <div className="text-sm text-gray-400 pr-4">{like}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTemplate;

/*


import React from "react";
import { Link } from "react-router-dom";

class CardTemplate extends React.Component {
  state = { like: 0, show: false };

  handleLike = () => {
    this.setState({ like: this.state.like + 1, show: true });
  };

  render() {
    const { link, title } = this.props;

    return (
      <div>
        <div className="pt-6 pb-12">
          <div className="text-md text-gray-700 font-mono hover:text-pink-500">
            <Link to={link}>{title}</Link>
          </div>
          <div className="text-sm text-gray-400">react-spring/ tailwindcss</div>
        </div>
      </div>
    );
  }
}

export default CardTemplate;*/
