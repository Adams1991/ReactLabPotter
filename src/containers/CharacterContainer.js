import React from 'react';

class CharacterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null,
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetch(url)
     .then((res) => {
       return res.json();
     })
     .then((data) => {
       this.setState({ characters: data});
       console.log(data);
     })
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index];
    this.setState({selectedCharacter: selectedCharacter});
  }

  render(){
    return (
      <div>
        <h2>Pottermania</h2>
        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}
        />
        <CharacterDetail selectedCharacter={this.state.selectedCharacter} />
      </div>
    );
  }


}

export default CharacterContainer;
