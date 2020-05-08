import React from "react";
import { shallow } from "enzyme";

describe('App',()=>{

    let wrapper;

    beforeEach(() => wrapper = shallow(<App/>));

    it("Should render Header component",()=>{
        expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true);
    })

    it("Should render Main Component",()=>{
        expect(wrapper.containsMatchingElement(<Main/>)).toEqual(true);
    })
})