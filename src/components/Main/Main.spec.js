import React from "react";
import {shallow} from "enzyme"


import Main from "../Main/Main";

describe("Main",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Main/>));

    it("Renders one main",()=>{
        expect(wrapper.find('main').length).toEqual(1);
    })
})