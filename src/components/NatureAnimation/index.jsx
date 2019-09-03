import React, { useRef, useEffect } from "react";
import PathToPathAnimation from "../PathToPathAnimation";
import {
  treePathElements,
  sunPathElements,
  flowerPathElements,
  boxesPathElements,
} from "./utils";

const NatureAnimation = () => {
  const animatedPaths = sunPathElements.map((el, i) => {
    const sun = el.props.d;
    const flower = flowerPathElements[i].props.d;
    const tree = treePathElements[i].props.d;
    const boxes = boxesPathElements[i].props.d;
    return <PathToPathAnimation pathsArray={[sun, flower, tree, boxes]} />;
  });

  return (
    <div>
      <svg viewBox="0 0 500 500" preserveAspectRatio="none">
        {animatedPaths}
      </svg>
    </div>
  );
};

export default NatureAnimation;
