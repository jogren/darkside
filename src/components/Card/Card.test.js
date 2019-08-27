import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card/Card'

describe('Card ', () => {
  it('should match the people snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        data={{ name: 'Luke Skywalker', homeworld: 'Tatooine', population: 200000, species: 'Human', language: 'Galactic Basic' }}
        type="people"
        key={0}
        toggleFavorite={jest.fn()}
        favorites={[]}
        theme="light"
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the planet snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        data={{ name: 'Alderaan', terrain: 'grasslands, mountains', population: 2000000000, climate: 'temperate', residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"] }}
        type="planets"
        key={0}
        toggleFavorite={jest.fn()}
        favorites={[]}
        theme="light"
      />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match the vehicle snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        data={{ name: "Sand Crawler", model: "Digger Crawler", vehicleClass: "wheeled", passengers: "30", cost: "150000", cargoCapacity: "50000", maxSpeed: "30" }}
        type="vehicles"
        key={0}
        toggleFavorite={jest.fn()}
        favorites={[]}
        theme="light"
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleFavorite when the favoriting image is clicked', () => {
    const mockFavoriteFunction = jest.fn();
    const wrapper = shallow(
      <Card
        data={{ name: 'Alderaan', terrain: 'grasslands, mountains', population: 2000000000, climate: 'temperate', residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"] }}
        type="planets"
        key={0}
        toggleFavorite={mockFavoriteFunction}
        favorites={[]}
        theme="light"
      />);
    wrapper.find('img').simulate('click');
    expect(mockFavoriteFunction).toHaveBeenCalled();
  });
});