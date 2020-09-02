import React, { useState } from "react";
import "./timeline.css";
import HorizontalTimeline from "react-horizontal-timeline";
import Content from "./content";
import timelineContent from "./timelineContent";

const VALUES = timelineContent.VALUES;
const Contents = timelineContent.Contents;

const Timeline = () => {
  const [value, setvalue] = useState(0);
  const [previous, setprevious] = useState(0);

  return (
    <section className="timeline">
      <div className="container text-center">
        <h1 className="pt-5 title">Event Schedule</h1>
        <div
          style={{
            width: "70%",
            height: "100px",
            margin: "30px auto",
            fontSize: "14px",
          }}
        >
          <HorizontalTimeline
            minEventPadding="76"
            maxEventPadding="76"
            LabelWidth="100"
            styles={{
              background: "#fff",
              foreground: "#F69925",
              outline: "#dfdfdf",
            }}
            fillingMotion={{ stiffness: "150", damping: "25" }}
            slidingMotion={{ stiffness: "150", damping: "25" }}
            index={value}
            indexClick={(index) => {
              setvalue(index);
              setprevious(value);
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">
          <Content contents={Contents} values={value} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
