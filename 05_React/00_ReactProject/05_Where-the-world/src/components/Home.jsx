
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountryList from "./CountryList.jsx";
import { useState } from "react";


const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountryList query={query} />
    </main>
  );
};

export default Home;
