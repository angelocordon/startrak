import React from 'react';
import propTypes from 'prop-types';
import { Headline as ResultsHeadline } from '../../components';

const renderHeadline = function(query) {
  if (query) {
    return <ResultsHeadline small>Search Results for {query} </ResultsHeadline>;
  }

  return;
};

export default function SearchResults({ query }) {
  return <section>{renderHeadline(query)}</section>;
}

SearchResults.propTypes = {
  query: propTypes.string,
};
