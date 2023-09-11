import PropTypes from 'prop-types';
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../CityName";
import { useState } from 'react';
import "./Search.css"

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className='search'>

    <AsyncPaginate
      className='textSearch'
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    <button className="buttonSearch">search</button>
    </div>
    
  );
};

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired, // Use lowercase 'onSearchChange'
  };
  
export default Search;