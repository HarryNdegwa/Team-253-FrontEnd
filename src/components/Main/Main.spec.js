import React from "react";


import Main from "../Main/Main";

describe("Main",()=>{

    let wrapper;

    beforeEach(()=> wrapper = shallow(<Main/>));

    it("Renders one div",()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })
})