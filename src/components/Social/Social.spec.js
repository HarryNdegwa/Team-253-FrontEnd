import React from "react";
import { shallow } from "enzyme";


import Social from "../Social/Social";


describe("Social",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Social/>));

    it("Renders one div",()=>{
        expect(wrapper.find("div").length).toEqual(1);
    })
})