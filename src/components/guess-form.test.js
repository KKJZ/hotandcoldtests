import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders a Form', () => {
    	const wrapper = shallow(<GuessForm />);
    	expect(wrapper.name()).toEqual('form');
    });

    // it('Should be able to submit form', () => {
    // 	const callback = jest.fn();
    // 	const wrapper = shallow(<GuessForm onMakeGuess={callback} />);
    // 	const value = 'test';
    // 	wrapper.find('.text').simulate('change', { target: { value } });
    // 	wrapper.find('.button').simulate('submit');
    // 	expect(callback).toHaveBeenCalledWith(value);
    // });
    
});