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
});