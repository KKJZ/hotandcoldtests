import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Should all be in a div', () => {
    	const wrapper = shallow(<Game />);
    	expect(wrapper.type()).toEqual('div')
    });

    it('Feedback State = "Make your Guess" on first render', () => {
    	const wrapper = shallow(<Game />);
    	expect(wrapper.state().feedback).toEqual('Make your guess!')
    });

    it('Restart should change state', () => {
    	const wrapper = shallow(<Game />);
    	wrapper.instance().makeGuess(5);
    	wrapper.update();
    	expect(wrapper.state().feedback).not.toEqual('Make your guess!');
    	wrapper.instance().restartGame();
    	wrapper.update();
    	expect(wrapper.state().feedback).toEqual('Make your guess!');
    });
});