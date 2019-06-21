import ApolloBoost from 'apollo-boost';

const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  },
});

export default client;
