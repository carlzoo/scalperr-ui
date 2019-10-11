import React from 'react';
import SideBarMenu from '../components/SideBarMenu';

import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe('SideBarMenu Snapshot tests',()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SideBarMenu />);
  });

  it("Menubutton should be present in sidebar", () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
})