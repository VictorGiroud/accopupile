import React, { useContext } from "react";
import styled, { css } from "styled-components";
import bush from "../assets/bush.png";
import TimerContext from "../contexts/TimerContext";

const StyledItem = styled.div`
  position: absolute;
  bottom: ${(props) => props.$bottom}px;

  ${(props) =>
    props.$isVisible &&
    css`
      background-color: red;
    `}
`;

const SPEED_MULTIPLICATOR = 0.5; // TODO context ou autre et l'utiliser pour les stripes aussi

const Item = ({ spawnTimer }) => {
  const timer = useContext(TimerContext);
  // TODO virer le modulo, pour le moment c'est pour qu'il respawn en boucle vu que y'en a qu'un
  const distance = SPEED_MULTIPLICATOR * (spawnTimer - (timer % spawnTimer));
  const isVisible = Math.abs(distance) - 150 < 100; // offset pour la taille du tracteur à gérer ailleurs

  return (
    <StyledItem $bottom={distance} $isVisible={isVisible}>
      <img src={bush} alt="Buisson" />
    </StyledItem>
  );
};

export default Item;
