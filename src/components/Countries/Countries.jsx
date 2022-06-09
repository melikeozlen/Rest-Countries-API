import React,{useEffect} from 'react'
import styled from 'styled-components'
import MainItem from "../Main/MainItem/MainItem"; 
import CountriesFetch from '../../Hook/CountriesFetch';
import {Link} from 'react-router-dom'       
const CountriesStyled = styled.main`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    width: 80%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Loading = styled.div`
position: absolute;
width: 100%;
height: 50%;
justify-content: center;
left: 0;
font-size: 2rem;
background-color: ${props => props.theme.background};
display: flex;
align-items: center;
`;
 const LinkStyled = styled(Link)`
text-decoration: none;
 color: black;
 `;
const Countries = ({continent}) => {
    const {countries, continentHook,setContinent } = CountriesFetch();

    useEffect(() => {
      setContinent(`${continent}`);
    }, [continent]);
  return (
    <CountriesStyled>{
        countries.length>0 ?
        countries.map((country,index) => {
         return( 
         <LinkStyled key={index} to={`/country/${country.name.common}`}>  
          <MainItem key={index} country={country}/>
         </LinkStyled>
          ) 
        })
        :
        <>
           <Loading>LOADING </Loading>
        </>
      }
      </CountriesStyled>
  )
}

export default Countries