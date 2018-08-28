import React from 'react';

const CharacterSelector = (props) => {

  function handleChange(event) {
    props.onCharacterSelected(event.target.value);
  }

  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>
              {character.name}
           </option>
  });

  return (<select
            id="character-selected"
            defaultValue="default"
            onChange={handleChange}
            >
              <option disabled value="default">
                Choose a character...
              </option>
              {options}
            </select>)

}

export default CharacterSelector;
