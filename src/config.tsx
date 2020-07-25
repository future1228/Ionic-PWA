export default {
  system: {
    title: "Buurdy",
  },
  okta: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    issuer: process.env.REACT_APP_ISSUER,
    redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URL,
    scopes: ['openid', 'profile', 'email'],
    pkce: false,
    disableHttpsCheck: false,
  },
  brand: {
    name: 'brand name'
  }
};