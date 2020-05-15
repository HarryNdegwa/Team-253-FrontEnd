import React from "react";
import { shallow } from "enzyme";

import ReportAccidentForm from "../ReportAccidentForm/ReportAccidentForm";

describe("ReportAccidentForm",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<ReportAccidentForm/>));

    it("Should render form",()=>{
        expect(wrapper.find("form").length).toEqual(1);
    })
})