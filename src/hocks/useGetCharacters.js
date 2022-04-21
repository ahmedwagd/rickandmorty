import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id,
        name,
        image,
      }
    }
  }
`;
const useGetCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  return {
    error, loading, data
  }
}

export default useGetCharacters;