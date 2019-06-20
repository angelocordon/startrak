import React, { useState } from 'react';
import SearchField from './SearchField';
import SearchResults from './SearchResults';

export default function SearchModule() {
  const [keyword, setKeyword] = useState();

  const handleSearch = function(query) {
    setKeyword(query);
  };

  return (
    <>
      <SearchField onSearch={handleSearch} />
      <SearchResults query={keyword} />
    </>
  );
}
