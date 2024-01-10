import React from "react";
import styled from "styled-components";
import Road from "./Road";
import RoadSidePeople from "./RoadSidePeople";
import RoadSideItems from "./RoadSideItems";

const StyledPlayground = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const RoadSideContainer = styled.div`
  width: 50px;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${(props) => props.theme.road.side};
`;

const Playground = () => {
  return (
    <StyledPlayground>
      <RoadSideContainer>
        <RoadSidePeople />
      </RoadSideContainer>
      <Road />
      <RoadSideContainer>
        <RoadSideItems />
      </RoadSideContainer>
    </StyledPlayground>
  );
};

export default Playground;
