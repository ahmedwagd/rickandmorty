import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATION = gql`
query getCharecterLocation ($name: String!) {
  characters(filter: { name: $name }){
    results {
      location{
        name
        
      }
    }
  }
}
`;

const Search = () => {
  const [name, setName] = useState('');
  const [getLocations, { error, loading, data }] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: { name }
  });
  console.log({ data });
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => {
        getLocations()
      }}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && (<ul>
        {
          data.characters.results.map((character, i) => (
            <li key={i.toString()}>{character.location.name}</li>
          ))
        }
      </ul>)}
    </div>
  )
}

export default Search