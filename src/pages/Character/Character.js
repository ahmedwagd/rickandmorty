import React from 'react';
import { useParams } from 'react-router-dom';
import useGetCharacter from '../../hocks/useGetCharacter';
const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useGetCharacter(id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className='character-wrapper'>
      <div className='character-container' key={data.character.id}>
        <div className="image-container">
          <img src={data.character.image} width="400px" height="400px" alt={data.character.name} title={`${data.character.name} image`} />
        </div>
        <div className="character-content">
          <h4>{data.character.name}</h4>
          <div className="character-episode">
            {
              data.character.episode.map((item, i) => (
                <p key={i.toString()}><b>{item.name}</b> - <span>{item.episode}</span></p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character;