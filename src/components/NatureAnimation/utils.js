import getTree from "./images/tree.svg";
import getSun from "./images/sun.svg";
import getFlower from "./images/flower.svg";
import getBoxes from "./images/boxes.svg";

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
