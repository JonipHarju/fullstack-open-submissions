import { useState, useEffect } from "react";

import CountryDetails from "./CountryDetails";

/* eslint-disable react/prop-types */
const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (countries.length === 1) {
      // Automatically select the country if it's the only one in the list
      setSelectedCountry(countries[0]);
    } else {
      // Reset selectedCountry if there are multiple or no countries
      setSelectedCountry(null);
    }
  }, [countries]);

  if (!countries || countries.length === 0) {
    return <p>No countries matching the search!</p>;
  }

  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;

  if (countries.length === 1) {
    return (
      <>
        <CountryDetails country={countries[0]} />
      </>
    );
  }

  const handleShow = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShow(country)}>Show</button>
          </li>
        ))}
      </ul>
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </>
  );
};

export default Countries;
