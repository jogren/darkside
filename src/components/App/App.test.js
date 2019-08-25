import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Landing from '../Landing/Landing';
import Container from '../Container/Container';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('App', () => {
  it.skip('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when toggleFavorite is called once', () => {
    const wrapper = shallow(<App />);
    const mockFavorite = {
      name: 'Djavan'
    };
    const expected = [mockFavorite];

    wrapper.instance().toggleFavorite(mockFavorite);
    expect(wrapper.state('favorites')).toEqual(expected)
  });

  it('should update state when toggleFavorite is called twice', () => {
    const wrapper = shallow(<App />);
    const mockFavorite = {
      name: 'Djavan'
    };
    const expected = [mockFavorite];

    wrapper.instance().toggleFavorite(mockFavorite);
    expect(wrapper.state('favorites')).toEqual([])
    wrapper.instance().toggleFavorite(mockFavorite);
    expect(wrapper.state('favorites')).toEqual(expected)
  });
  
  describe('Route', () => {
    it('should show Landing component for / router', () => {
      const component = mount(<MemoryRouter initialEntries={['/']} >
        <App />
      </MemoryRouter>
      );
      expect(component.find(Landing)).toHaveLength(1);
    });
  
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
    });
  });
})
