import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledNotFound = styled.div`
width: 100%;
height: 100%;
text-align: center;
padding: 10rem 0 0 0;
font-size: 4rem;
color: ${props => props.theme.text};
display: flex;
flex-direction: column;
align-items: center;
`;
const Back = styled(Link)`
  width: max-content;
  padding: 0.5rem 2rem;
  border-radius: 0.3em;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
font-size: 2rem;

  text-decoration: none;
  color:  ${props => props.theme.text};
  background-color:  ${props => props.theme.elements};
`;
const NotFound = () => {
  return (
    <StyledNotFound>NotFound
      <Back to="/">Home Page</Back>
    </StyledNotFound>
  )
}

export default NotFound