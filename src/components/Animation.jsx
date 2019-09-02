import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";

import NatureAnimation from "./NatureAnimation";

const AnimationContainer = styled("div")`
  padding-top: 1em;
  width: 200px;
  height: 200px;
`;

const Animation = () => (
  <AnimationContainer>
    <NatureAnimation
      dimensions={{ width: 500, height: 500 }}
      margins={{ top: 10, bottom: 80, left: 30, right: 10 }}
    />
  </AnimationContainer>
);

export default Animation;
