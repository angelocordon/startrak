import React from 'react';
import propTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { RepoItem } from '../../components';

const RESULTS_QUERY = gql`
  query queriedRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          viewerHasStarred
        }
      }
    }
  }
`;

export default function SearchResults({ query }) {
  const queryOpts = { variables: { queryString: query }, suspend: true };
  const { data, error } = useQuery(RESULTS_QUERY, queryOpts);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return (
      <div>
        <p>Sorry! Looks like there was an error.</p>
        <p>Check the console for details.</p>
      </div>
    );
  }

  return (
    <div>
      {data.search.nodes.map(repo => (
        <RepoItem key={repo.id} {...repo} />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  query: propTypes.string,
};
