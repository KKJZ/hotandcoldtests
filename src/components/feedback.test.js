import React from 'react';
import {shallow, mount} from 'enzyme';

import FeedBack from './feedback';

describe('<FeedBack />', () => {
	it('Renders without crashing', () => {
		shallow(<FeedBack />)
	});
});