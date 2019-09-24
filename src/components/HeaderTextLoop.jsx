import React from "react";
import TextLoop from "react-text-loop";

const HeaderTextLoop = () => (
  <TextLoop
    interval={3800}
    adjustingSpeed={200}
    springConfig={{ stiffness: 170, damping: 30 }}
    children={[
      "Logos",
      "λόγος",
      "thought",
      "speech",
      "story",
      "information",
      "Word",
      "logic",
      "explanation",
      "contemplation",
      "communication",
      "dialogue",
      "rationality",
      "rhetoric",
      "discourse",
      "God",
    ]}
  />
);

export default HeaderTextLoop;
