import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Wrapper is a h2', () => {
    	const wrapper = shallow(<GuessCount />);
    	expect(wrapper.name()).toEqual('h2');
    });

    it('should have guess count prop', () => {
    	const wrapper = shallow(<GuessCount />);
    	expect(wrapper.prop('guessCount')).toEqual(undefined);
    });
});