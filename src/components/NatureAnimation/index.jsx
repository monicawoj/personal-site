import React, { useRef } from "react";
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
  const animatedPaths = sunPathElements.map((el, i) => {
    const sun = el.props.d;
    const flower = flowerPathElements[i].props.d;
    const tree = treePathElements[i].props.d;
    const boxes = boxesPathElements[i].props.d;
    return <ShapeTransition pathsArray={[sun, flower, tree, boxes]} />;
  });

  const pauseAnimation = () =>
    select(ref.current)
      .selectAll("*")
      .interrupt();

  return (
    <div onClick={() => pauseAnimation()} ref={ref}>
      <svg viewBox="0 0 500 500" preserveAspectRatio="none">
        {animatedPaths}
      </svg>
    </div>
  );
};

export default NatureAnimation;
