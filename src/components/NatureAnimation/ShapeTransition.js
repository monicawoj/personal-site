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

  const runAnimation = element =>
    select(element)
      .attr("fill", themeGreen)
      .transition()
      .on("end", () => repeat({ element }));

  useEffect(() => runAnimation(ref.current), []);

  return <path ref={ref} d={sun} />;
};

export default ShapeTransition;
