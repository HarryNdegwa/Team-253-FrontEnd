import React from 'react';
import { shallow } from 'enzyme';

import RoadSafety from '../Cards/RoadSafety';


describe('RoadSafety',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<RoadSafety/>));

    it('Should render div',()=>{
        expect(wrapper.find('div').length).toEqual(2)
    })

})