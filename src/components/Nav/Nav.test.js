import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Nav', () => {
  it('should show Container component for a specific path', () => {
    const component = mount(<MemoryRouter initialEntries={['/']} >
      <App />
    </MemoryRouter>
    );
    // expect(component.find(Card)).toHaveLength(1);
  });
});