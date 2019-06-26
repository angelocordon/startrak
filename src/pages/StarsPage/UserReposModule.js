import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { RepoItem } from '../../components';

const USER_REPOS_QUERY = gql`
  query queriedUserRepos {
    viewer {
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
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
  }
`;

export default function UserReposModule() {
  const { data, error } = useQuery(USER_REPOS_QUERY, { suspend: true });

  const renderResults = function() {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return (
        <>
          <p>Sorry! Looks like there was an error.</p>
          <p>Check the console for details.</p>
        </>
      );
    }

    return data.viewer.repositories.nodes.map(repo => (
      <RepoItem key={repo.id} {...repo} />
    ));
  };

  return <div>{renderResults()}</div>;
}
