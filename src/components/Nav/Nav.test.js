import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Nav', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Nav
        favorites={[]}
        theme="light"
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Nav
        favorites={[]}
        theme="dark"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});