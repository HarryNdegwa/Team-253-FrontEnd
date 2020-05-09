import React from 'react';
import { shallow } from 'enzyme';

import Carousel from '../Carousel/Carousel';


describe('Carousel',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Carousel/>));

    it('Should render div',()=>{
        expect(wrapper.find('div').length).toEqual(5)
    })

})