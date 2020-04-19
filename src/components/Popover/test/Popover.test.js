import React from 'react';
import { shallow } from 'enzyme';
import Popover from '..';

let wrapper;

const props = {
  content: <>Content</>,
  children: <>Children</>,
};

describe('Popover Component', () => {
  beforeAll(() => {
    wrapper = shallow(<Popover {...props} />);
  });

  it('To match snapshot of Popover', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
