import React from 'react';
import { shallow } from 'enzyme';

import TrafficLights from '../Cards/TrafficLights';


describe('TrafficLights',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<TrafficLights/>));

    it('Should render div',()=>{
        expect(wrapper.find('div').length).toEqual(2)
    })

})