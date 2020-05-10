import React from 'react';
import { shallow } from 'enzyme';

import SpeedLimit from '../Cards/SpeedLimit';


describe('SpeedLimit',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<SpeedLimit/>));

    it('Should render div',()=>{
        expect(wrapper.find('div').length).toEqual(2)
    })

})