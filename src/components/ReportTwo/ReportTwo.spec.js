import React from "react";
import { shallow } from "enzyme";

import ReportTwo from "../ReportTwo/ReportTwo";


describe("ReportTwo",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<ReportTwo/>));

    it("Should render div",()=>{
        expect(wrapper.find('div').length).toEqual(3)
    })

})