import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const AppStyled = styled.div`
  background: ${props => props.theme.background};
  width: 100%;
  height: max-content;
  min-height: 100vh;
  color:${props => props.theme.text} ;
  `;

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <AppStyled>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>hi </button>
        App</AppStyled>
    </ThemeProvider>
  );
};

export default App;
