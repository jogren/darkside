import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav/Nav';

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