
import React from "react";

const Content = ({ contents, values }) => {
  return (
    <div
      style={{ width: "70%" }}
      className="card text-center mx-auto mb-5 shadow-lg"
    >
      <div className="card-body">
        <h2 className="card-title pt-3">
          Speaker Name: {contents[values].name}
        </h2>
        <h4 className="card-text mt-4 pb-5">
          Session Name: "{contents[values].event}"
        </h4>
      </div>
    </div>
  );
};

export default Content;


