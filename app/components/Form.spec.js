import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form', () => {
  it('should render correctly', () => {

    const component = shallow(<Form />);
  
    expect(component).toMatchSnapshot();
  });
});