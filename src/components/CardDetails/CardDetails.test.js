import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import CardDetails from '../CardDetails/CardDetails'
import { MemoryRouter } from 'react-router'

describe('Card Details', () => {
  it('should match the snapshot when a planet is displayed with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardDetails 
        name="Alderaan"
        terrain="grasslands, mountains"
        population="2000000000"
        climate="temperate"
        orbitalPeriod="402"
        rotationPeriod="18"
        diameter={4900}
        gravity="0.85 standard"
        theme="light"
        residents={["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
        type="planets"
        favorites={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when a person is displayed with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        species="Human"
        homePopulation="200000"
        language="Galactic Basic"
        hairColor="brown"
        eyeColor="blue"
        birthYear="1700"
        type="people"
        favorites={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when a vehicle is displayed with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardDetails
        name="TIE bomber"
        model="IE/sa bomber"
        vehicleClass="space/planetary bomber"
        passengers="0"
        type="vehicles"
        cost="30000"
        maxSpeed="650 km/h"
        cargoCapacity="10 tons"
        favorites={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when a favorited card is displayed with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        species="Human"
        homePopulation="200000"
        language="Galactic Basic"
        type="favorites"
        hairColor="brown"
        eyeColor="blue"
        birthYear="1700"
        theme="dark"
        favorites={[{ name: "Luke Skywalker", homeworld: "Tatooine", species: "Human", homePopulation: "200000", language: "Galactic Basic" }]}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should add the favorite class if element is in the favorites array', () => {
    const wrapper = shallow(
      <CardDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        species="Human"
        homePopulation="200000"
        language="Galactic Basic"
        type="people"
        favorites={[{ name: "Luke Skywalker", homeworld: "Tatooine", species: "Human", homePopulation: "200000", language: "Galactic Basic" }]}
      />);
      expect(wrapper.find('div').hasClass('favorite')).to.equal(true);
      expect(wrapper.exists('.favorite')).to.equal(true);

      // const mockFavorites = [{ name: "Luke Skywalker", homeworld: "Tatooine", species: "Human", homePopulation: "200000", language: "Galactic Basic" }];
      // const isFavorite = mockFavorites.map(favorite => favorite.name).includes(name) ? 'favorite' : null; 
      // expect(isFavorite).to.equal('favorite');
    });
    
  it('should show Card Details component for a specific path', () => {
    const component = mount(<MemoryRouter initialEntries={['/people/LeiaOrgana']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(CardDetails)).toHaveLength(1);
  });
})