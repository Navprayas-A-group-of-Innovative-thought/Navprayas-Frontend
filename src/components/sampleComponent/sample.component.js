/*
    comment here
    This is a sample component please don't modify this file
    learn here how to apply custum styles from
    if you need to apply multiple classes at same DOM you can use cx describe below
*/

import React from "react";
import "./sample.css";

const sample = () => {
  return (
    <div className="sampleClassName">
      Sample Component
      <div className="style1 style2">
        This is how multiple classes is applied at one DOM check sample
        component for details
      </div>
    </div>
  );
};

export default sample;
