import React from "react";

import { useLocation } from "react-router-dom";

const NoMatchPage = () => {
  let location = useLocation();

  return (
    <div className=" text-center py-24 ">
      <h3 className="text-4xl text-pink-400 font-mono font-semibold">
        No result for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatchPage;
