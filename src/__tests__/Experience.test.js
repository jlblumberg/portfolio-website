import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../components/Experience';

describe('Experience', () => {

  const wrapper = shallow(<Experience />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a down button which takes you to the work section', () => {
    expect(wrapper.find('#down-button').exists()).toBe(true);
  });

});
