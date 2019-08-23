import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('Route', () => {
  it('should show Landing component for / router', () => {
    const component = mount(<MemoryRouter initialEntries={['/']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Landing)).toHaveLength(1);
  })

  it('should show Container component for /planets router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/planets']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Container)).toHaveLength(1);
  })

  it('should show Container component for /people router', () => {
    const component = mount(<MemoryRouter initialEntries={['/people']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Container)).toHaveLength(1);
  })

  it('should show Container component for /vehicles router', () => {
    const component = mount(<MemoryRouter initialEntries={['/vehicles']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Container)).toHaveLength(1);
  })
})
