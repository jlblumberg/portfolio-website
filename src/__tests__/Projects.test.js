import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../components/Projects'

describe('Projects', () => {

  const wrapper = shallow(<Projects />)

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a card for each project', () => {
    expect(wrapper.find('#project').length).toEqual(6);
  });

  it('has a down button which takes you to the contact section', () => {
    expect(wrapper.find('#down-button').exists()).toBe(true);
  });

});