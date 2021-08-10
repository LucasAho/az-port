import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
  }
  
  componentDidMount() {
    axios
      .get('/api/wordlist/tukren/')
      .then(res => this.setState({ words: res.data }))
      .catch(alert);
  }

  render() {
    const { words } = this.state;

    return (
      <div className="App">
        <button onClick={this.seedWords}>Seed Words</button>
        <button onClick={this.deleteWords}>Delete Words</button>

        <ul>
          {words.map(wordModel => (
            <li key={wordModel._id}>
              {wordModel.conlang}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  seedWords = () => {
    const doSeed = window.confirm('Seed data');
    if (!doSeed) return;
    axios
      .post('/api/wordlist/tukren/seed', {})
      .then(() => {
        axios
          .get('/api/wordlist/tukren')
          .then(res => this.setState({ words: res.data }))
          .catch(alert);
      })
      .catch(alert);
  }
}

export default App;
