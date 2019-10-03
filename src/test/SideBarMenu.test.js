import React from 'react';
import SideBarMenu from '../components/SideBarMenu';
import { create, update } from 'react-test-renderer';

import { shallow, configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe('SideBarMenu Snapshot tests',()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SideBarMenu />);
  });

  it("Menubutton and Navbar should be present in sidebar", () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
})