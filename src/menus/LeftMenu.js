import React, { useContext } from "react";
import TimerContext from "../contexts/TimerContext";

const LeftMenu = () => {
  const timer = useContext(TimerContext);
  return <>Temps écoulé : {timer}</>;
};

export default LeftMenu;
