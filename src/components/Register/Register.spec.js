import React from "react";
import { shallow } from "enzyme";

import Register from "../Register/Register";


describe("Register",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Register/>));

    it("Should render div",()=>{
        expect(wrapper.find("form").length).toEqual(1);
    })
})