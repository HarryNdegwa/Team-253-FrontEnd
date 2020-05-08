import React from "react";
import { shallow } from "enzyme";

import App from "../App/App";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

describe('App',()=>{

    let wrapper;

    beforeEach(() => wrapper = shallow(<App/>));

    it("Should render SideBar component",()=>{
        expect(wrapper.containsMatchingElement(<SideBar/>)).toEqual(true);
    })

    it("Should render Main Component",()=>{
        expect(wrapper.containsMatchingElement(<Main/>)).toEqual(true);
    })
})