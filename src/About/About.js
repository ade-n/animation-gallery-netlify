import React from "react";

const About = () => {
  return (
    <div className="sm:mx-auto sm:w-3/5 py-4 ">
      <div className="text-2xl text-pink-400 font-mono">
        This website was create for{" "}
        <span className="text-3xl font-bold hover:text-gray-500 cursor-pointer">
          myself
        </span>{" "}
        first and foremost as I needed a place to reach for animations. I often
        forget how to use them since I am not messing with{" "}
        <a
          href="/animation-gallery-web"
          className="text-3xl font-bold hover:text-gray-500 cursor-pointer"
        >
          animations
        </a>{" "}
        on a daily basis. I will try to update this as often as I can and keep
        this website free for those who find this interesting.
      </div>
    </div>
  );
};

export default About;
