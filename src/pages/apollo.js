// apollo.js
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.hygraph.com/v2/cl6rxv2tg0ogt01ujc798fpc0/master', // Zmień na odpowiednią ścieżkę do swojego API GraphQL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { ApolloProvider, client };
