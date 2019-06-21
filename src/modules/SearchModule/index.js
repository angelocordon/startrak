import React, { useState } from 'react';
import SearchField from './SearchField';
import SearchResults from './SearchResults';
import { Headline as ResultsHeadline } from '../../components';

const renderHeadline = function(query) {
  if (query) {
    return <ResultsHeadline small>Search Results for {query} </ResultsHeadline>;
  }

  return;
};

export default function SearchModule() {
  const [keyword, setKeyword] = useState();

  return (
    <>
      <SearchField onSearch={setKeyword} />
      <section>
        {renderHeadline(keyword)}
        {keyword ? <SearchResults query={keyword} /> : null}
      </section>
    </>
  );
}
