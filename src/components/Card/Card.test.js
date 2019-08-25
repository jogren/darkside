import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Card from '../Card/Card'
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Card ', () => {
  it('should show Card components for a specific path', () => {
    const component = mount(<MemoryRouter initialEntries={['/people']} >
      <App />
    </MemoryRouter>
    );
    // expect(component.find(Card)).toHaveLength(1);
  });

  it('should match the people snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        data={{ name: 'Luke Skywalker', homeworld: 'Tatooine', population: 200000, species: 'Human', language: 'Galactic Basic' }}
        type="people"
        key={0}
        toggleFavorites={jest.fn()}
        favorites={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the planet snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        data={{ name: 'Alderaan', terrain: 'grasslands, mountains', population: 2000000000, climate: 'temperate', residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"] }}
        type="planets"
        key={0}
        toggleFavorites={jest.fn()}
        favorites={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});