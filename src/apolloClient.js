import ApolloBoost from 'apollo-boost';

export const setApolloClient = function(token) {
  return new ApolloBoost({
    uri: 'https://api.github.com/graphql',
    request: operation => {
      operation.setContext({
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
    },
  });
};
