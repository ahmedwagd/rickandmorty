import React from "react";
import Character from "../../components/Character/Character";
import useGetCharacters from "../../hocks/useGetCharacters";
import './CharactersList.css';

function CharactersList() {
  const { error, loading, data } = useGetCharacters();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="characters-list">
      {
        data.characters.results.map(character => (
          <Character key={character.id.toString()} name={character.name} image={character.image} id={character.id} />
        ))
      }
    </div>
  );
}
export default CharactersList;
