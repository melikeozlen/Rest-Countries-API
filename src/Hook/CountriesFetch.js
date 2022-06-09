import {useEffect, useState} from 'react'
const BASE_URL = 'https://restcountries.com/v3.1/';
const CountriesFetch = () => {
  const [countries, setCountries] = useState([])
  const [continentHook, setContinent] = useState('region/Africa');

  const getCountry =()=>{
    fetch(BASE_URL+`${continentHook}`)
    .then(response => response.json())
    .then(data => setCountries(data))
  }


  useEffect(()=>{
    getCountry();
  },[continentHook])
  return {
    countries,
    setContinent,
    continentHook
  }
}

export default CountriesFetch