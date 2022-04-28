import React from "react";
import TextLoop from "react-text-loop";

const HeaderTextLoop = () => (
  <TextLoop
    interval={3000}
    adjustingSpeed={200}
    springConfig={{ stiffness: 170, damping: 30 }}
    children={[
      "Poland",
      "America",
      "people",
      "stories",
      "λόγος",
      "thought",
      "free speech",
      "information",
      "logic",
      "explanation",
      "contemplation",
      "communication",
      "dialogue",
      "discourse",
      "God",
    ]}
  />
);

export default HeaderTextLoop;
