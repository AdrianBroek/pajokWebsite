import { gql, useMutation, useQuery  } from '@apollo/client';
import React, { useEffect, useState } from 'react';

const AddPrice = () => {
  const [input, setInput] = useState('ss')
  // Define mutation
  const ADD_TODO = gql`
    mutation AddTodo($title: String!) {
      createToDoList(data: {title: $title}) {
        id
        title
        stage
      }
      publishToDoList(where: {title: $title}, to: PUBLISHED) {
        stage
        id
      }
    }
  `;

  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
    variables: { title: input }
  });

  useEffect(()=>{ 
    // console.log(input)
  }, [input])

  return (
   <>
    <form
        onSubmit={e => {
          e.preventDefault();
          addTodo();
          setInput('');
        }}
      >
        <input
        type='text'
          onChange={(e)=>setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
   </>
  );
}

export default AddPrice;