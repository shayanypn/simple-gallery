import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

const items = [
	{
		id: 'sample-uuid',
		thumbnail: 'https://dummyimage.com/150x150/dedede/000000',
		full: 'https://dummyimage.com/600x400/dedede/000000',
		date: 1544805235686
	}
]

describe('List', () => {
  it('should render correctly', () => {

    const component = shallow(<List items={items} />);
  
    expect(component).toMatchSnapshot();
  });
});