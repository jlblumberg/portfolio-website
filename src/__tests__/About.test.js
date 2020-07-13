import React from 'react';
import { shallow } from 'enzyme';
import About from '../components/About';

describe('About', () => {
  const wrapper = shallow(<About />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a header, icons, and descriptive text', () => {
    expect(wrapper.find('#header').text()).toEqual('ABOUT');
    expect(wrapper.find('#icons').exists()).toEqual(true);
    expect(wrapper.find('#description').html()).toContain('full-stack software engineer');
  });

  it('has a down button which takes you to the experience section', () => {
    expect(wrapper.find('#down-button').exists()).toBe(true);
  });

});