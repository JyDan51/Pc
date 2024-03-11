import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const MainComponent = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform search logic here, e.g., fetch data from an API
    // For demonstration purposes, just setting some dummy results
    const dummyResults = [
      `Result 1 for ${searchTerm}`,
      `Result 2 for ${searchTerm}`,
      `Result 3 for ${searchTerm}`,
    ];
    setSearchResults(dummyResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResult results={searchResults} />
    </div>
  );
};

export default MainComponent;