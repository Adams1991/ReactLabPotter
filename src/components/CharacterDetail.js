import React from 'react';

const CharacterDetail = (props) => {
  if (!props.selectedCharacter) return null;

  return (
    <div>
      <h2> Name: {props.selectedCharacter.name}</h2>
      <img src={props.selectedCharacter.image}></img>
      <h1> Patronus: {props.selectedCharacter.patronus}</h1>
      <h3> Ancestry: {props.selectedCharacter.ancestry}</h3>

    </div>
  )
}

export default CharacterDetail;
