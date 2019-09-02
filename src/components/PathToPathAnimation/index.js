import React, { useRef, useEffect, useState } from "react";
import { select } from "d3-selection";
import { interpolate } from "flubber";
import { active } from "d3-transition";
import { easeSin } from "d3-ease";
import { interpolateRgb } from "d3-interpolate";

const PathToPathAnimation = ({ startPath, endPath, pathsArray }) => {
  let ref = useRef(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [count, setCount] = useState(0);

  const repeat = ({ element, startPath, endPath }) => {
    setCount(count + 1);
    let currentEndPathIndex = pathsArray.indexOf(endPath);
    let newEndPathIndex =
      currentEndPathIndex === pathsArray.length - 1
        ? 0
        : currentEndPathIndex + 1;
    console.log(count);

    console.log({ currentEndPathIndex, newEndPathIndex });
    const currentEndPath = pathsArray[currentEndPathIndex];
    const newEndPath = pathsArray[newEndPathIndex];
    active(element)
      .transition()
      .delay(1000)
      .duration(2000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(startPath, endPath))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "#87ba7e")
      )
      .transition()
      .delay(500)
      .duration(1000)
      .ease(easeSin)
      .attrTween("d", () => interpolate(endPath, startPath))
      .attrTween("fill", () =>
        interpolateRgb(element.getAttribute("fill"), "white")
      )
      .on("end", () =>
        repeat({ element, startPath: currentEndPath, endPath: newEndPath })
      );
  };

  //   pathsArray.forEach(path => {
  //     const startPathIndex = pathsArray.indexOf(path);
  //     const startPath = path;
  //     const endPath =
  //       startPathIndex === pathsArray.length - 1
  //         ? pathsArray[0]
  //         : pathsArray[startPathIndex + 1];

  //     active(element)
  //       .transition()
  //       .delay(1000)
  //       .duration(2000)
  //       .ease(easeSin)
  //       .attrTween("d", () => interpolate(startPath, endPath))
  //       .attrTween("fill", () =>
  //         interpolateRgb(element.getAttribute("fill"), "#87ba7e")
  //       );
  //   });

  //   const repeat = element => {
  //     active(element)
  //       .transition()
  //       .delay(500)
  //       .duration(1000)
  //       .ease(easeSin)
  //       .attrTween("d", () => interpolate(startPath, endPath))
  //       .attrTween("fill", () =>
  //         interpolateRgb(element.getAttribute("fill"), "#87ba7e")
  //       )
  //       .transition()
  //       .delay(500)
  //       .duration(1000)
  //       .ease(easeSin)
  //       .attrTween("d", () => interpolate(endPath, startPath))
  //       .attrTween("fill", () =>
  //         interpolateRgb(element.getAttribute("fill"), "white")
  //       )
  //       .on("end", () => repeat(element));
  //     };

  const resumeAnimation = element => {
    return runAnimation(element);
  };
  const pauseAnimation = element => {
    return select(element).interrupt();
  };

  const runAnimation = element => {
    select(element)
      .attr("stroke", "#004100")
      .attr("stroke-width", "10px")
      .attr("fill", "white")
      .on("click", () => {
        setIsAnimationPaused(!isAnimationPaused);
        return isAnimationPaused
          ? resumeAnimation(element)
          : pauseAnimation(element);
      })
      .transition()
      .on("end", () =>
        repeat({ element, startPath: pathsArray[0], endPath: pathsArray[1] })
      );
  };

  useEffect(() => runAnimation(ref.current), []);

  return <path ref={ref} d={pathsArray[0]} />;
};

export default PathToPathAnimation;
