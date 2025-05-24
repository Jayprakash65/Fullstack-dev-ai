
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountryList from "./CountryList.jsx";
import { useState } from "react";
import CountriesListShimmer from "./CountriesListShimmer.jsx";


const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState('');

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      
      <CountryList region={region} query={query} />
    </main>
  );
};

export default Home;
