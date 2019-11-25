import React from 'react';
import Ticketmaster from '../components/Ticketmaster';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createWaitForElement } from 'enzyme-wait';
configure({ adapter: new Adapter() });

describe('Search Bar Snapshot tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Ticketmaster />);
  });

  it('Search field should be present.', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('Search button exists.', () => {
    expect(wrapper.find('form').find('button')).toHaveLength(1);
  });
});

describe('Search API test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Ticketmaster />);
  });

  const find = createWaitForElement('tr');

  it('Search should start with at least 1 result', () => {
    find(wrapper).then(wrapper =>
      expect(wrapper.find('td').length).toBeGreaterThan(0)
    );
  });
});
