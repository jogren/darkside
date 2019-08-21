import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => this.cleanData(data.results))
      .then(cleanedData => this.setState({ planets: cleanedData }))
    }
    
    cleanData(data) {
      return data.map(planet => {
        let namesArray = [];
        planet.residents.map(person => {
          return fetch(person)
          .then(res => res.json())
          .then(data => namesArray.push(data.name))
        });
        return {
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: namesArray
        }
      });
    }
    
    render() {
      console.log(this.state.planets)
      return (
        <main className="App-main">
        <header className="App-header">
          <h1>LightSide</h1>
        </header>
        <Nav />
        <Container />
      </main>
    );
  }
}

export default App;
