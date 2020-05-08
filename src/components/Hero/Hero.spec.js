import React from "react";
import { shallow } from "enzyme";

import Hero from "../Hero/Hero";

describe("Hero",()=>{
    let wrapper;

    beforeEach(()=> wrapper = shallow(<Hero />));

    it("Should render div",()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })
})