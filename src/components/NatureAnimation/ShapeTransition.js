import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import colors from "styles/colors";
import { active } from "d3-transition";

import { transitionShape } from "./utils";

const ShapeTransition = ({ pathsArray }) => {
  let ref = useRef(null);
  const [sun, flower, tree, boxes] = pathsArray;
  const { themePrimary, themeSecondary, themeDark, themeLight } = colors;

  const repeat = ({ element }) => {
    active(element)
      .transition()
      .call(transitionShape, {
        color: themeSecondary,
        path: flower,
      })
      .transition()
      .call(transitionShape, {
        color: themeDark,
        path: tree,
      })
      .transition()
      .call(transitionShape, {
        color: themePrimary,
        path: boxes,
      })
      .transition()
      .call(transitionShape, {
        color: themeLight,
        path: sun,
      })
      .on("end", () => repeat({ element }));
  };

  const runAnimation = () => {
    if (ref.current) {
      select(ref.current)
        .attr("fill", themeLight)
        .transition()
        .on("end", () => repeat({ element: ref.current }));
    }
  };

  useEffect(runAnimation, []);

  return <path ref={ref} d={sun} />;
};

export default ShapeTransition;
