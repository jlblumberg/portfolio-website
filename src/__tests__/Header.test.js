import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {

  const wrapper = shallow(<Header/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has information about me and my profile image', () => {
    expect(wrapper.text()).toContain("Hi.I'm Josh Blumberg.I build software for the web.");
    expect(wrapper.find('#profile-picture').exists()).toBe(true);
  });

  it('has a down button which takes you to the about section', () => {
    expect(wrapper.find('#down-button').exists()).toBe(true);
  });

});