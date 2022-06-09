import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import NotFound from "./components/NotFound/NotFound";
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
        <Header theme ={theme} setTheme={setTheme}/>  
        <Routes>
        <Route  path="/" element={<Main/>}/>
        <Route path='/country/:country' element={<Details/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
     
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
