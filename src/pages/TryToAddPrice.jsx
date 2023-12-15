
import React from 'react';
import { useMutation } from 'react-query';
import { ApolloProvider, client } from './apollo';
import { gql } from "@apollo/client";

const CREATE_PRICES_MUTATION = gql`
  mutation MyMutation($cena: Float!) {
    createPrices(data: { cena: $cena }) {
      cena
      createdAt
      createdBy {
        name
      }
      id
      stage
      updatedAt
      updatedBy {
        name
      }
      photoCount {
        text
      }
    }
  }
`;

function AddPrice() {
  const mutation = useMutation(
    (variables) => client.mutate({ mutation: CREATE_PRICES_MUTATION, variables }),
    {
      onSuccess: (data) => {
        // Obsługa sukcesu mutacji
        console.log('Mutation successful', data);
      },
      onError: (error) => {
        // Obsługa błędu mutacji
        console.error('Mutation error', error);
      },
    }
  );

  const handleMutation = () => {
    // Wywołaj mutację, przekazując odpowiednie zmienne
    mutation.mutate({ cena: 3000.0 });
  };

  return (
    <div>
      <button onClick={handleMutation}>Wywołaj mutację</button>
    </div>
  );
}

export default AddPrice;