import { interpolate } from "flubber";
import { easeSin } from "d3-ease";
import { interpolateRgb } from "d3-interpolate";
import getTree from "./svgs/tree.svg";
import getSun from "./svgs/sun.svg";
import getFlower from "./svgs/flower.svg";
import getBoxes from "./svgs/boxes.svg";

export const transitionShape = (transition, { color, path }) => {
  const element = transition.selection();
  return transition
    .delay(2000)
    .duration(2000)
    .ease(easeSin)
    .attrTween("d", () => interpolate(element.attr("d"), path))
    .attrTween("fill", () => interpolateRgb(element.attr("fill"), color));
};

export const treePathElements = getTree().props.children[1].props.children.map(
  el => ({
    key: el.key === "0" ? "tree-hub" : `tree-spoke-${el.key}`,
    props: el.props,
    id: el.key === "0" ? "tree-hub" : `tree-spoke-${el.key}`,
  })
);

export const sunPathElements = getSun().props.children[1].props.children.map(
  el => ({
    key: el.key === "0" ? "sun-hub" : `sun-spoke-${el.key}`,
    props: el.props,
    id: el.key === "0" ? "sun-hub" : `sun-spoke-${el.key}`,
  })
);

export const flowerPathElements = getFlower().props.children[1].props.children.map(
  el => ({
    key: el.key === "0" ? "flower-hub" : `flower-spoke-${el.key}`,
    props: el.props,
    id: el.key === "0" ? "flower-hub" : `flower-spoke-${el.key}`,
  })
);

export const boxesPathElements = getBoxes().props.children[1].props.children.map(
  el => ({
    key: el.key === "0" ? "boxes-hub" : `boxes-spoke-${el.key}`,
    props: el.props,
    id: el.key === "0" ? "boxes-hub" : `boxes-spoke-${el.key}`,
  })
);
