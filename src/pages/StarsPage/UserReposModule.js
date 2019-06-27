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
  const repos = data.viewer.repositories.nodes;

  // Early return if there are any errors.
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return (
      <div>
        <p>
          Sorry! Looks like there was an error.Check the console for details.
        </p>
      </div>
    );
  }

  // Gaurd clause for iterating through starred repositories.
  if (repos.length > 0) {
    return (
      <div>
        {repos.map(repo => (
          <RepoItem key={repo.id} {...repo} />
        ))}
      </div>
    );
  }

  // Default return for when there are no starred repositories.
  return (
    <div>
      <p>
        You don't seem to have any starred repos! Try searching for some and
        star 'em!
      </p>
    </div>
  );
}
