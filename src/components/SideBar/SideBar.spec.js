import React from "react";
import { shallow } from "enzyme";

import SideBar from "../SideBar/SideBar";


describe("SideBar",()=>{
    let wrapper;

    beforeEach(()=> wrapper = shallow(<SideBar/>));

    it("Renders 2 divs",()=>{
        expect(wrapper.find("div").length).toEqual(1);
    })
})