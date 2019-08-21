import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import './App.css';
import apiCalls from '../Util/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
      crawl: ''
    }
  }

  componentDidMount() {
    let randomNumber = Math.floor((Math.random() * 7) + 1)
    fetch(`https://swapi.co/api/films/${randomNumber}`)
      .then(res => res.json())
      .then(data => this.setState({crawl: data.opening_crawl}))

    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => apiCalls.cleanPlanetData(data.results))
      .then(planets => this.setState({ planets }))

    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(data => apiCalls.cleanPeopleData(data.results))
      .then(data => apiCalls.getPeopleHomes(data))
      .then(data => apiCalls.getSpecies(data))
      .then(people => this.setState({ people }))

    fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .then(data => apiCalls.cleanVehicles(data.results))
      .then(vehicles => this.setState({ vehicles }))
  
    }
    
    render() {
      console.log(this.state)
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
