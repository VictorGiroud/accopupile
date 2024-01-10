import React from "react";
import Item from "./Item";
import styled from "styled-components";

const StyledRoadSideItems = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & * {
    width: 100%;
  }
`;

const RoadSideItems = () => {
  return (
    <StyledRoadSideItems>
      <Item spawnTimer={3000} />
      <Item spawnTimer={2800} />
    </StyledRoadSideItems>
  );
};

export default RoadSideItems;
