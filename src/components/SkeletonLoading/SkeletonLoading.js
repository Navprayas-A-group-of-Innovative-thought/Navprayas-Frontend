import React from "react";
import "./skeleton.css";

const SkeletonLoading = ({ children }) => {
  return <div className="skeleton">{children}</div>;
};

export default SkeletonLoading;
