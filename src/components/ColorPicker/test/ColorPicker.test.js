import React from 'react';
import { shallow } from 'enzyme';

import ColorPicker from '..';

let wrapper;

const props = {
  label: 'Testing Color Picker',
};

describe('ColorPicker Component', () => {
  beforeAll(() => {
    wrapper = shallow(<ColorPicker {...props} />);
  });

  it('To match snapshot of ColorPicker', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
