import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import CardDetails from '../CardDetails/CardDetails'
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Card Details', () => {
  it('should match the snapshot when a planet is displayed with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardDetails 
        name="Alderaan"
        terrain="grasslands, mountains"
        population="2000000000"
        climate="temperate"
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
        favorites={[]}
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
      // expect(wrapper.find('div').hasClass('favorite')).to.equal(true);
      // expect(wrapper.exists('.favorite')).to.equal(true);

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