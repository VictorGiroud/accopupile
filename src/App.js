import React, { useEffect } from "react";
import Playground from "./playground/Playground";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import TimerContext from "./contexts/TimerContext";
import useTimer from "./hooks/useTimer";
import LeftMenu from "./menus/LeftMenu";

const AppContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.grass};
  height: 100%;
`;

const MenuContainer = styled.div`
  flex: 1;
`;

const PlaygroundContainer = styled.div`
  flex: 0 0 auto;
`;

const App = () => {
  const { elapsedTime, handleStart } = useTimer(0);

  useEffect(() => {
    handleStart();
  }, [handleStart]);

  return (
    <ThemeProvider theme={theme}>
      <TimerContext.Provider value={elapsedTime}>
        <AppContainer>
          <MenuContainer>
            <LeftMenu />
          </MenuContainer>
          <PlaygroundContainer>
            <Playground />
          </PlaygroundContainer>
          <MenuContainer></MenuContainer>
        </AppContainer>
      </TimerContext.Provider>
    </ThemeProvider>
  );
};

export default App;
