import React, { useRef, useEffect, useState } from "react";
import { select } from "d3-selection";
import ShapeTransition from "./ShapeTransition";
import {
  treePathElements,
  sunPathElements,
  flowerPathElements,
  boxesPathElements,
} from "./utils";

const NatureAnimation = () => {
  let ref = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    return () => setIsTransitioning(false);
  }, []);

  const animatedPaths = sunPathElements.map((el, i) => {
    const sun = el.props.d;
    const flower = flowerPathElements[i].props.d;
    const tree = treePathElements[i].props.d;
    const boxes = boxesPathElements[i].props.d;
    return (
      <ShapeTransition
        key={`shape-${i}`}
        pathsArray={[sun, flower, tree, boxes]}
      />
    );
  });

  const pauseAnimation = () =>
    select(ref.current)
      .selectAll("*")
      .interrupt();

  if (isTransitioning) {
    return (
      <div onClick={() => pauseAnimation()} ref={ref}>
        <svg viewBox="0 0 500 500" preserveAspectRatio="none">
          {animatedPaths}
        </svg>
      </div>
    );
  }

  return null;
};

export default NatureAnimation;
