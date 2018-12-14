import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('About', () => {
  it('should render correctly', () => {
    const component = shallow(<About />);
    expect(component).toMatchSnapshot();
  });

  it('should have h1 with text Image Gallery', () => {
    const component = shallow(<About />);
    expect(component.find('h1').text()).toEqual('Image Gallery');
  });
});