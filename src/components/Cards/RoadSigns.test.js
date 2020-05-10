import React from 'react';
import { shallow } from 'enzyme';

import RoadSigns from '../Cards/RoadSigns';


describe('RoadSigns',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<RoadSigns/>));

    it('Should render div',()=>{
        expect(wrapper.find('div').length).toEqual(2)
    })

})