import React from 'react'
import styled from 'styled-components'

const MainItemStyled = styled.div`
width: 100%;
height: 20rem;
display: flex;
flex-direction: column;
justify-content: center;
gap:1rem;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
border-radius: 0.5rem;
cursor: pointer;
`;


const Flag = styled.img`
width: 100%;
height: 11rem;
object-fit: cover;
overflow: hidden;
`;
const Title = styled.h1`
font-size: 1rem;
`;
const Info = styled.div`
padding: 0.5rem 1rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
`;
const MainItem = ({country}) => {
  return (
    <MainItemStyled>
       {/*Flog*/}
       <Flag src={country.flags.svg} alt="flag"/>
      {/*Title*/}
      {/*Population*/}
      <Info>
      <Title> {country.name.common}</Title>
      <span> <b>Population:</b> {country.population.toLocaleString()}</span>
      <span> <b>Region:</b> {country.region}</span>
      <span> <b>Capital:</b> {country.capital}</span>
      </Info>

    </MainItemStyled>
  )
}

export default MainItem