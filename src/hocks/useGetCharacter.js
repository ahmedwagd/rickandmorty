import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacter ($id: ID!) {
    character (id: $id){
        id,
        name,
        image
      episode {
          name
          episode
        }
    }
  }
`;
const useGetCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });
  return {
    error, loading, data
  }
}

export default useGetCharacter;