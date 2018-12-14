import React from 'react';
import { shallow } from 'enzyme';

import ModalView from './ModalView';

describe('ModalView', () => {
  it('should render correctly', () => {

    const component = shallow(<ModalView />);
  
    expect(component).toMatchSnapshot();
  });
});