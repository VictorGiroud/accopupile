import React from "react";
import styled from "styled-components";
import Stripes from "./Stripes";
import Tractor from "../Tractor";

const StyledRoad = styled.div`
  height: 100%;
  width: 160px;
  border-left: 2px solid ${(props) => props.theme.road.border};
  border-right: 2px solid ${(props) => props.theme.road.border};
  padding: 0 5px;
  background-color: ${(props) => props.theme.road.ground};
  position: relative;
  display: grid;
`;

const Road = () => {
  return (
    <StyledRoad>
      <Stripes />
      <Tractor />
    </StyledRoad>
  );
};

export default Road;
