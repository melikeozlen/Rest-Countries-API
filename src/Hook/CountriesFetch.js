import {useEffect, useState} from 'react'
const BASE_URL = 'https://restcountries.com/v3.1/region/';
const CountriesFetch = () => {
  const [countries, setCountries] = useState([])
  const [continentHook, setContinent] = useState('Africa');

  const getCountry =()=>{
    fetch(BASE_URL+`${continentHook}`)
    .then(response => response.json())
    .then(data => setCountries(data))
  }
  useEffect(()=>{
    setContinent('Africa')
  },[])

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