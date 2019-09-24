import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import colors from "styles/colors";
import { active } from "d3-transition";

import { transitionShape } from "./utils";

const ShapeTransition = ({ pathsArray }) => {
  let ref = useRef(null);
  const [sun, flower, tree, boxes] = pathsArray;
  const { themeBlue, themeGreen, themeGreenDark, themeGreenLight } = colors;

  const repeat = ({ element }) => {
    active(element)
      .transition()
      .call(transitionShape, {
        color: themeBlue,
        path: flower,
      })
      .transition()
      .call(transitionShape, {
        color: themeGreenDark,
        path: tree,
      })
      .transition()
      .call(transitionShape, {
        color: themeGreenLight,
        path: boxes,
      })
      .transition()
      .call(transitionShape, {
        color: themeGreen,
        path: sun,
      })
      .on("end", () => repeat({ element }));
  };

  const runAnimation = () => {
    if (ref.current) {
      select(ref.current)
        .attr("fill", themeGreen)
        .transition()
        .on("end", () => repeat({ element: ref.current }));
    }
  };

  useEffect(runAnimation, []);

  return <path ref={ref} d={sun} />;
};

export default ShapeTransition;
