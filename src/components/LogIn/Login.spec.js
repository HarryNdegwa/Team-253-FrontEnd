import React from 'react';
import { shallow } from 'enzyme';

import LogIn from '../LogIn/LogIn';


describe('LogIn',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<LogIn/>));

    it('Should render div',()=>{
        expect(wrapper.find('form').length).toEqual(1);
    });
});