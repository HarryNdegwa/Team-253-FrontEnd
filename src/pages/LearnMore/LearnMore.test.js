import React from 'react';
import { shallow } from 'enzyme';

import LearnMore from '../LearnMore/LearnMore';


describe('LearnMore',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<LearnMore/>));

    it('Should render one main',()=>{
        expect(wrapper.find('main').length).toEqual(1)
    })
    

})