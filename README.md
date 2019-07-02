# StarTrak

A small web-app bootstraped with Create-React-App that uses GitHub's GraphQL API to search for starrable repositories and manage your own starred repositories. This is currently hosted on Netlify: https://startrak.netlify.com/

## To-Do

Currently, the biggest missing feature here is being able to star repositories from the search results. Other than that, there a few opportunities for improvements:

- Add server side implementation as GitHub does not support implicit oauth. Potential opportunity to try out with NextJS. This also might mean moving to Now.sh instead of Netlify.
- Add pagination to be able to search more than 10 repositories.
- Add more valuable tests:
  - Test GraphQL components: https://www.apollographql.com/docs/react/recipes/testing/
  - Implement test utilties from Styled Components to better components with nested Styled Components.

## Running Locally

To run locally, clone the repository and rename `.env.example` file to `.env.local`. Make sure to get your own developer keys from GitHub and replace the sample values.

Install via NPM:

```bash
npm install
```

and start the server:

```bash
npm start
```

To run tests,

```bash
npm test
```
