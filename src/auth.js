const createCSRFToken = function() {
  const hash = Math.random()
    .toString(36)
    .substring(2, 15);

  return `${hash}${hash}`;
};

const authParams = {
  baseURL: 'https://github.com/login/oauth/authorize',
  postURL: 'https://github.com/login/oauth/access_token',
  clientID: process.env.REACT_APP_GH_CLIENT_ID,
  secret: process.env.REACT_APP_GH_CLIENT_SECRET,
  scope: 'public_repo',
  state: createCSRFToken(),
};

export default class Auth {
  constructor() {
    this.state = authParams.state;
    this.authURL = `${authParams.baseURL}?client_id=${authParams.clientID}&scope=${authParams.scope}&state=${this.state}`;
    this.postURL = `${authParams.postURL}?client_id=${authParams.clientID}&client_secret=${authParams.secret}&code=`;
  }

  // Handles payload tradeoff with GitHub by passing the code back to GH and
  // returns an object (either with errors or with access token)
  authenticate = code => {
    const postURL = encodeURIComponent(this.postURL + code);

    // Using a server proxy to handle CORS to GitHub. In a production app,
    // should spin up an Express server to handle authentication flows.
    return fetch(`https://api.allorigins.win/post?url=${postURL}`)
      .then(response => response.json())
      .then(data => {
        const params = new URLSearchParams(data.contents);
        const token = params.get('access_token');
        const error = params.get('error');

        const response = {};

        if (token) {
          response.accessToken = token;
        }

        if (error) {
          const errorDescription = params.get('error_description');
          const errorURI = params.get('error_uri');

          response.error = {
            description: errorDescription,
            uri: errorURI,
          };
        }

        return response;
      });
  };
}
