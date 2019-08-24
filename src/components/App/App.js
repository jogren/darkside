import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import Landing from '../Landing/Landing';
import CardDetails from '../CardDetails/CardDetails';
import apiCalls from '../Util/apiCalls';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
      crawl: {},
      isLoading: true
    }
  }

  toggleFavorite = (card) => {
    const { favorites } = this.state;
    favorites.map(favorite => favorite.name).includes(card.name) ? this.removeFavorite(card) : this.addFavorite(card);
  }

  addFavorite = (card) => {
    const { favorites } = this.state;
    this.setState({ favorites: [...favorites, card]});
  }

  removeFavorite = (card) => {
    const { favorites } = this.state;
    const filteredFavorites = favorites.filter(favorite => favorite.name !== card.name)
    this.setState({ favorites: filteredFavorites});

  }

  componentDidMount() {
    let randomNumber = Math.floor((Math.random() * 7) + 1)
    fetch(`https://swapi.co/api/films/${randomNumber}`)
      .then(res => res.json())
      .then(data => this.setState({ crawl: { title: data.title, body: data.opening_crawl } }))
  

    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => apiCalls.cleanPlanetData(data.results))
      .then(planets => this.setState({ planets, isLoading: false }))

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
      const { planets, people, vehicles, favorites, crawl, isLoading } = this.state;
      return (
        <main className="App-main">
        <header className="App-header">
          <Link to='/' className="link">
            <h1>LightSide</h1>
          </Link> 
        </header>
        <Nav />
        <Route exact path='/' render={() => <Landing film={crawl}/> }/>
        <Route exact path='/planets' render={() => <Container data={planets} type="planets" />} />
        <Route exact path='/people' render={() => <Container data={people} type="people" />} />
        <Route exact path='/vehicles' render={() => <Container data={vehicles} type="vehicles" />} />
        <Route path='/planets/:name' render={({ match }) => {
            let targetPlanet = this.state.planets.find(planet => planet.name.replace(/\s/g, '') == match.params.name);
            return <CardDetails {...targetPlanet} type="planets" />
        }} />
        <Route path='/people/:name' render={({ match }) => {
            let targetPerson = this.state.people.find(person => person.name.replace(/\s/g, '') == match.params.name);
            return <CardDetails {...targetPerson} type="people" />
        }} />
        <Route path='/vehicles/:name' render={({ match }) => {
            let targetVehicle = this.state.vehicles.find(vehicle => vehicle.name.replace(/\s/g, '').replace("/", "") == match.params.name);
            return <CardDetails {...targetVehicle} type="vehicles" />
        }} />
      </main>
    );
  }
}

export default App;
