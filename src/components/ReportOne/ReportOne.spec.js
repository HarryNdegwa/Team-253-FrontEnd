import React from "react";
import { shallow } from "enzyme";

import ReportOne from "../ReportOne/ReportOne";


describe("ReportOne",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<ReportOne/>));

    it("Should render div",()=>{
        expect(wrapper.find('div').length).toEqual(3)
    })

})