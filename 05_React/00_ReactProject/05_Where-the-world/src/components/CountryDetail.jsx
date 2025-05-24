import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../components/CountryDetail.css";
import CountryDetailShimmer from "./CountryDetailShimmer";

const CountryDetail = () => {
  const [countryData, setCountryData] = useState();
  const [loading, setLoading] = useState(true)

  const params = useParams();
  const {state} = useLocation()

  
  const countryName = params.country;


  function updateCountryData(data){
    setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),

          borders: [],
          
        });

        if(!data.borders){
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
         return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders}))
        })

        setLoading(false)
  }


  useEffect(() => {
  
    if(state){
      updateCountryData(state);
      return
    }

    setLoading(true)

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data)

      }).catch((err) => {
        console.log(err);
        setLoading(true)
      })
  }, [countryName]);

  return loading ? (
    
    <CountryDetailShimmer/>
  ) : (
    <>
    <main>
      {countryData.length === 0 ? <CountryDetailShimmer/> : <div className="country-details-container">
        <span onClick={() => history.back()} className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>

        <div className="country-details">
          <img src={countryData.flag} alt="" />
          <div className="details-text-container">
            <h1>{countryData.name} </h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population:{countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region:{countryData.subregion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages"></span>
              </p>
            </div>
            {
              countryData.borders?.length !== 0 ? <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders?.map((border, i) => {
                  return <Link key={i} to={`/${border}`}>{border}</Link>;
                })}
              </div> : null
            }
          </div>
        </div>
      </div>}
    </main>
    </>
  )
;
};

export default CountryDetail;
