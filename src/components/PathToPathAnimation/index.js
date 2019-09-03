import React, { useRef, useEffect, useState } from "react";
import { select } from "d3-selection";
import { interpolate } from "flubber";
import { active } from "d3-transition";
import { easeSin } from "d3-ease";
import { interpolateRgb } from "d3-interpolate";

const PathToPathAnimation = ({ pathsArray }) => {
  let ref = useRef(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [sun, flower, tree, boxes] = pathsArray;

  const repeat = ({ element }) => {
    active(element)
      .transition()
      .delay(2000)
      .duration(2000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(sun, flower))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "pink")
      )
      .transition()
      .delay(2000)
      .duration(2000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(flower, tree))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "burlywood")
      )
      .transition()
      .delay(2000)
      .duration(2000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(tree, boxes))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "#87ba7e")
      )
      .transition()
      .delay(2000)
      .duration(2000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(boxes, sun))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "gold")
      )
      .on("end", () => repeat({ element }));
  };

  const resumeAnimation = element => {
    return runAnimation(element);
  };
  const pauseAnimation = element => {
    return select(element).interrupt();
  };

  const runAnimation = element => {
    select(element)
      .attr("fill", "gold")
      .on("click", () => {
        setIsAnimationPaused(!isAnimationPaused);
        return isAnimationPaused
          ? resumeAnimation(element)
          : pauseAnimation(element);
      })
      .transition()
      .on("end", () => repeat({ element }));
  };

  useEffect(() => runAnimation(ref.current), []);

  return <path ref={ref} d={pathsArray[0]} />;
};

export default PathToPathAnimation;
