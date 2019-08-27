import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container/Container';

describe('Container ', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
    <Container 
      data={[{ name: 'Luke Skywalker', homeworld: 'Tatooine', population: 200000, species: 'Human', language: 'Galactic Basic' }]}
      type="people"
      toggleFavorite={jest.fn()}
      favorites={[]}
      theme="light"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});