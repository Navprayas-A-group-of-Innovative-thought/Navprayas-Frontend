/*
    comment here
    This is a sample component please don't modify this file
    learn here how to apply custum styles from
    if you need to apply multiple classes at same DOM you can use cx describe below
*/

import React from "react";
import styles from "../styles/sample.module.css";
import cx from "classnames";
const sample = () => {
  return (
    <div className={styles.sampleClassName}>
      Sample Component
      <div className={cx(styles.style1, styles.style2)}>
        This is how multiple classes is applied at one DOM check sample
        component for details
      </div>
    </div>
  );
};

export default sample;
