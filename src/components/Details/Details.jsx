import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 3rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  gap: 1rem;
`;
const Back = styled(Link)`
  width: max-content;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Image = styled.img`
  width: 100%;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;
const Name = styled.h1`
  grid-column: 1/3;
`;
const Details = () => {
    const { country } = useParams();
    const [loading, setLoading] = useState(true);
    const [borderName, setBorder] = useState([]);
    const [borderN, setBorderN] = useState([]);
  
    const [countryDetails, setCountryDetails] = useState([]);
  
    const getCountryDetails = async (inf) => {
      const res= await fetch(`https://restcountries.com/v2/name/${inf}`)
      const data = await res.json();
      setCountryDetails(data[0]);
      setBorder(data[0].borders);
      setLoading(false);
      
    };
  const getBorderCountries = async (inf) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${inf}`)
    const data = await res.json();
    console.log(data[0].name);
    setBorderN(prew => [...prew,data[0].name] );
  }
    useEffect(() => {
      getCountryDetails(country);
      borderName.map((inf) => getBorderCountries(inf));
    }, [country]);
    
  return (
    <StyledDetailsPage>
    <Back to="/">Back</Back>
    {loading ? <h1>Loading...</h1> : 
    
    <Detail>
      <Image src={countryDetails.flag}  />
      <Info>
        <Name>{countryDetails.name}</Name>  
        <p> <b>Native Name:</b> {countryDetails.nativeName}</p>
        <p> <b>Top Level Domain:</b> {countryDetails.topLevelDomain[0]}</p>
        <p> <b>Population:</b> {countryDetails.population}</p>
        <p> <b>Currencies:</b> {countryDetails.currencies[0].name}</p>
        <p> <b>Region:</b> {countryDetails.region}</p>
        <p> <b>Language:</b> {countryDetails.languages[0].name}</p> 
        <p> <b>Sub Region:</b> {countryDetails.subregion}</p>
        <p> <b>Capital:</b> {countryDetails.capital}</p>

      </Info>
      <div>
        <span> <b>Border Counries: </b> </span> {
        borderN.map(border => ( 
           <Link to={`/country/${border.common}`}>{border.common}</Link>
           
           ))
        }
      </div>
    </Detail> 
    
    }
  </StyledDetailsPage>
  )
}

export default Details