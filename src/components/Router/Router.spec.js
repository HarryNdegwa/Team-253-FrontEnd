import React from "react";
import { shallow } from "enzyme";


import Router from "../Router/Router";

describe("Router",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Router/>));

    it("Renders one div",()=>{
        expect(wrapper.find("div").length).toEqual(1);
    })
})