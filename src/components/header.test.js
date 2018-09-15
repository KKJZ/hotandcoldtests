import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Render header tag', () => {
    	const wrapper = shallow(<Header />);
    	expect(wrapper.name()).toEqual('header')
    });
});