import React from 'react';
import propTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const RESULTS_QUERY = gql`
  query queriedRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
`;

export default function SearchResults({ query }) {
  const { data, error, loading } = useQuery(RESULTS_QUERY, {
    variables: { queryString: query },
  });

  if (loading) {
    return <p>Fetching...</p>;
  }

  if (error) {
    return <p>There was an error.</p>;
  }

  return data.search.nodes.map(repo => <p key={repo.id}>{repo.name}</p>);
}

SearchResults.propTypes = {
  query: propTypes.string,
};
