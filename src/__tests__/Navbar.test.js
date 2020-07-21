import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';

describe('Navbar', () => {

  const wrapper = shallow(<Navbar/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has links for about, experience, projects, contact, and CV', () => {
    expect(wrapper.text()).toContain('aboutexperienceprojectscontactCV');
  });

  it('has a home button', () => {
    expect(wrapper.find('#home-button').exists()).toBe(true);
  });

});