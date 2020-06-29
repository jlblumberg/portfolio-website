import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {

  const wrapper = shallow(<Header/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});