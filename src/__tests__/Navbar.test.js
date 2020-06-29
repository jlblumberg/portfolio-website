import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';

describe('Navbar', () => {

  const wrapper = shallow(<Navbar/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});