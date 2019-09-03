import React, { useRef, useEffect, useState } from "react";
import { select, selectAll } from "d3-selection";
import { active } from "d3-transition";

import { transitionShape } from "./utils";

const ShapeTransition = ({ pathsArray }) => {
  let ref = useRef(null);
  const [sun, flower, tree, boxes] = pathsArray;

  const repeat = ({ element }) => {
    active(element)
      .transition()
      .call(transitionShape, {
        color: "pink",
        path: flower,
      })
      .transition()
      .call(transitionShape, {
        color: "burlywood",
        path: tree,
      })
      .transition()
      .call(transitionShape, {
        color: "#87ba7e",
        path: boxes,
      })
      .transition()
      .call(transitionShape, {
        color: "gold",
        path: sun,
      })
      .on("end", () => repeat({ element }));
  };

  const runAnimation = element =>
    select(element)
      .attr("fill", "gold")
      .transition()
      .on("end", () => repeat({ element }));

  useEffect(() => runAnimation(ref.current), []);

  return <path ref={ref} d={sun} />;
};

export default ShapeTransition;
