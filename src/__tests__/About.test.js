import React from 'react';
import { mount } from 'enzyme';
import About from '../components/About';

describe('About', () => {

  it('renders correctly', () => {
    const wrapper = mount(<About />);
    expect(wrapper).toMatchSnapshot();
  });

});