import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 3rem auto;
  width: 90%;
  gap: 1rem;
  height: max-content;
  min-height: 50vh;

`;
const Back = styled(Link)`
  width: max-content;
  padding: 0.5rem 2rem;
  border-radius: 0.3em;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;
  color:  ${props => props.theme.text};
  background-color:  ${props => props.theme.elements};
`;
const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
    min-height: 50vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Name = styled.h1`
  grid-column: 1/3;
`;
const BorderLink = styled(Link)`
text-decoration: none;
padding: 0.2rem;
border: 0.5px solid  #999;
margin: 0 0.3rem;
color: ${props => props.theme.text};
border-radius: 0.2rem;
background-color:  ${props => props.theme.elements};
`;
const Loading = styled.div`
position: absolute;
width: 100%;
height: 50%;
justify-content: center;
left: 0;
background-color: ${props => props.theme.background};
display: flex;
align-items: center;
font-size: 2rem;
`;

const Borders = styled.div`

width: 100%;

display: flex;
gap: 1rem;
flex-wrap: wrap;
@media (max-width: 650px) {
  margin: 2rem 0;
  gap: 0.3rem;
  }
`;
const ContRight = styled.div`
    display: flex;
    flex-direction: column;
  height: 100%;
    justify-content: space-around;
    
`;
const Details = () => {
  const { country } = useParams();
  const [loading, setLoading] = useState(true);
  const [borderName, setBorder] = useState([]);
  const [borderName2, setBorder2] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
    const [ld, setLd] = useState(false);
  const getCountryDetails = async (inf) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${inf}`);
    const data = await res.json();
    await setCountryDetails(data[0]);
    await setBorder(data[0].borders);
    setLoading(false);
  };
  
  const getBorder = async (border, len) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
    const data = await res.json();
    await setBorder2(prew => [...prew, data[0].name.common]);
    setLd(true);
  };

  useEffect(() => {
    getCountryDetails(country);
  }, [country]);
useEffect(() => {
    setBorder2([]);
    if (borderName) {
         borderName.map((border, len ) => {
      return  getBorder(border);
    })
    }
   
    
}, [borderName]);
  return (
    <StyledDetailsPage>
      <Back to="/">HOME</Back>
      {loading ? (
        <Loading>LOADING</Loading>
      ) : (
        <Detail>
          <Image src={countryDetails.flags.png} alt={countryDetails.name.common}/>
          <ContRight>

      
          <Info>
            <Name>{countryDetails.name.common}</Name>
            <p>
              <b>Native Name:</b>{" "}
              {Object.values(countryDetails.name.nativeName)[0].official}
            </p>
            <p>
              <b>Top Level Domain:</b> {countryDetails.tld[0]}
            </p>
            <p>
              <b>Population:</b> {countryDetails.population.toLocaleString()}
            </p>
            <p>
              <b>Currencies:</b>{" "}
              {Object.values(countryDetails.currencies)[0].name}
            </p>
            <p>
              <b>Region:</b> {countryDetails.region}
            </p>
            <p>
              <b>Languages: </b> {Object.values(countryDetails.languages)[0]}
            </p>
            <p>
              <b>Subregion: </b> {countryDetails.subregion}
            </p>
            <p>
              <b>Capital: </b> {countryDetails.capital[0]}
            </p>
          </Info>
          <Borders>
            <span>
              <b>Border Counries: </b>
            </span>
            {ld ? (
              borderName.map((border, index) => {
                return (
                    <BorderLink key={index} to={`/country/${borderName2[index]}`}>
                    {borderName2[index]}
                  </BorderLink>
                );
              })
            ) : (
              <span>No borders</span>
            )}
           
          </Borders>
          </ContRight>
        </Detail>
      )}
    </StyledDetailsPage>
  );
};

export default Details;
