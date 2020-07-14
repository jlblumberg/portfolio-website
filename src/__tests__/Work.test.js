import React from 'react';
import { shallow } from 'enzyme';
import Work from '../components/Work'

describe('Work', () => {

  const wrapper = shallow(<Work />)

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a down button which takes you to the contact section', () => {
    expect(wrapper.find('#down-button').exists()).toBe(true);
  });

});