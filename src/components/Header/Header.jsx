import React from 'react'
import {MdOutlineDarkMode, MdLightMode} from 'react-icons/md'
import styled from 'styled-components'


const HeaderStyled = styled.header`
background-color: ${props => props.theme.elements};
width: 100%;
height: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 10%;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;
const Button = styled.button`
background: transparent;
border: 0;
color: ${props => props.theme.text};
cursor: pointer;
display: flex;
gap: 0.5rem;
align-items: center;
`;
const Title = styled.h1`
  font-size: 1.8rem;

@media (max-width: 500px) {
  font-size: 1.2rem;
}
`;
const Header = ({theme, setTheme}) => {
  return (
    <HeaderStyled>
        <Title>Where in the world?</Title>
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {
            theme === "light" ? <><MdOutlineDarkMode/> Dark Mode</> : <><MdLightMode/>Light Mode</>
        }    
         </Button>
    </HeaderStyled>
  )
}

export default Header