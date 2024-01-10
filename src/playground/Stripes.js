import React from "react";
import styled, { keyframes } from "styled-components";

const moveStripes = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(130px); }
`;

const StyledStripes = styled.div`
  position: absolute;
  opacity: 0.8;
  left: 47%;
  width: 6%;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    white,
    white 60px,
    transparent 60px,
    transparent 130px
  );
  animation: ${moveStripes} 0.25s linear infinite;
`;

const Stripes = () => {
  return <StyledStripes />;
};

export default Stripes;
