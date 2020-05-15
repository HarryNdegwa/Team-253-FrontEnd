import React from 'react';
import { shallow } from 'enzyme';

import ReportRecklessness from '../ReportRecklessness/ReportRecklessness';

describe('ReportRecklessness',()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<ReportRecklessness/>));

    it('Should render form',()=>{
        expect(wrapper.find('form').length).toEqual(1);
    });
});