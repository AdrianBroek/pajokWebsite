// apollo.js
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
const api_key = process.env.REACT_APP_GRAPH_KEY
const httpLink = createHttpLink({
  uri: `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`, 
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  debug: true,
});

export { ApolloProvider, client };
