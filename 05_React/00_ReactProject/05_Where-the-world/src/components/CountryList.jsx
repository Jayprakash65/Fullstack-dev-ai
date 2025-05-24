import {useState, useEffect } from "react";
import CountryCard from "./CountryCard.jsx";
// import countriesData from "../countriesData.js";
import axios from 'axios';
import CountriesListShimmer from "./CountriesListShimmer.jsx";


const CountryList = ({region, query}) => {

    const [countriesData, setCountriesData] = useState([])


    useEffect(() =>{
        const fetchData = async () => {
            const response  = await axios.get('https://restcountries.com/v3.1/all')
            setCountriesData(response.data);
            
        }

        fetchData()
        
    },[])

    

  return (
    <>
      {!countriesData.length ? <CountriesListShimmer/> : <div className="countries-container">

        {countriesData.filter((country) => {
          
          const matchesQuery = country.name.common.toLowerCase().includes(query.toLowerCase())
          const matchesRegion = region === '' || country.region === region;

          return matchesQuery && matchesRegion


        }).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })}
      </div>}
    </>
  );
};

export default CountryList;
