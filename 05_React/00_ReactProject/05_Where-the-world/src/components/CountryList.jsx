import {useState, useEffect } from "react";
import CountryCard from "./CountryCard.jsx";
// import countriesData from "../countriesData.js";
import axios from 'axios';


const CountryList = ({query}) => {

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
      <div className="countries-container">

        {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
