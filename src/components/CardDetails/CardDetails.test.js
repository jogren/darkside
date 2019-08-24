import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App/App';
import CardDetails from '../CardDetails/CardDetails'
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Card Details', () => {
  it('should show Card Details component for a specific path', () => {
    const component = mount(<MemoryRouter initialEntries={['/people/LeiaOrgana']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(CardDetails)).toHaveLength(1);
  });
});

