import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import { interpolate } from "flubber";
import { active } from "d3-transition";
import { easeSin } from "d3-ease";

const PathToPathAnimation = ({ pathsArray }) => {
  let ref = useRef(null);

  const [pathA, pathB] = pathsArray;

  const repeat = () => {
    active(ref.current)
      .transition()
      .delay(1000)
      .duration(2000)
      .ease(easeSin)
      .style("fill", "#87ba7e")
      .attrTween("d", () => interpolate(pathA, pathB))
      .transition()
      .delay(1000)
      .duration(2000)
      .ease(easeSin)
      .style("fill", "#87ba7e")
      .attrTween("d", () => interpolate(pathB, pathA))
      .on("start", repeat);
  };

  const runPathToPathAnimation = () => {
    select(ref.current)
      .style("stroke", "#004100")
      .style("stroke-width", "10px")
      .style("fill", "white")
      .transition()
      .delay(1000)
      .duration(2000)
      .ease(easeSin)
      .style("fill", "#87ba7e")
      .attrTween("d", () => interpolate(pathA, pathB))
      .transition()
      .delay(1000)
      .duration(2000)
      .ease(easeSin)
      .style("fill", "#87ba7e")
      .attrTween("d", () => interpolate(pathB, pathA))
      .on("start", repeat);
  };

  useEffect(() => runPathToPathAnimation(), []);

  return <path ref={ref} d={pathA} />;
};

export default PathToPathAnimation;
