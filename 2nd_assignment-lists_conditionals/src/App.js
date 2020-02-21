import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  }

  deleteCharHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    this.setState({text: text.join('')});
  }

  changeTextHandler = (event) => {
    this.setState({text: event.target.value});
  }

  render() {
    let separatedChars = null;

    if (this.state.text) {
      const charsText = this.state.text.split('');
      separatedChars = <div>
          {charsText.map((c, index) => {
            return <CharComponent
              char={c}
              click={() => this.deleteCharHandler(index)}
              key={index} />;
          })}
        </div>;
    }

    return (
      <div className="App">
        <input type='text' onChange={this.changeTextHandler} value={this.state.text} />
        <p>Text length: {this.state.text.length}</p>

        <ValidationComponent textLength={this.state.text.length} />

        {separatedChars}
      </div>
    );
  }
}

export default App;
