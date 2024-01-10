import React from "react";
import tractor from "./assets/tractor.png";
import styled from "styled-components";

const StyledTractor = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  width: 40%;
  margin-bottom: 50px;

  img {
    width: 100%;
  }
`;

const Tractor = () => {
  return (
    <StyledTractor>
      <img src={tractor} alt="L'engin" />
    </StyledTractor>
  );
};

export default Tractor;
