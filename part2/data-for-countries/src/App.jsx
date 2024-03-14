import Countries from "./components/Countries";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import country from "./services/country";
import "./index.css";

export function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchParameter, setSearchParameter] = useState("");

  useEffect(() => {
    country.getAllCountries().then((response) => {
      setCountries(response);
    });
  }, []);

  useEffect(() => {
    filterCountries();
  }, [searchParameter]);

  const filterCountries = () => {
    if (!countries) {
      return;
    } else if (searchParameter.trim() === 0) {
      return;
    }
    const filtered = countries.data.filter((country) =>
      country.name.common.toLowerCase().includes(searchParameter.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  const onSearchChange = (e) => {
    setSearchParameter(e.target.value);
  };

  return (
    <div>
      <Search
        onSearchChange={onSearchChange}
        searchParameter={searchParameter}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
