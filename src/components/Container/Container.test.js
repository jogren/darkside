import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Card from '../Card/Card'
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Container ', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
    <Container 
      data={[{ name: 'Luke Skywalker', homeworld: 'Tatooine', population: 200000, species: 'Human', language: 'Galactic Basic' }]}
      type="people"
      toggleFavorites={jest.fn()}
      favorites={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});