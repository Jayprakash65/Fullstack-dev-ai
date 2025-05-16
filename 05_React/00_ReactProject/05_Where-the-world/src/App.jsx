
import './App.css'
import Header from './components/Header.jsx'
import  SearchBar  from "./components/SearchBar.jsx";
import SelectMenu from "./components/SelectMenu.jsx";
import CountryList from "./components/CountryList.jsx";
import {useState} from 'react'

function App() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />

      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountryList query={query} />
      </main>

    </>
  )
}

export default App
