import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '..';
import { ColorPickerWrapper } from '../styles/ColorPicker.style';

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

  it('Label exists', async (done) => {
    expect(wrapper.find('label')).toHaveLength(1);
    done();
  });

  it('ColorPickerWrapper exists', async (done) => {
    expect(wrapper.find(ColorPickerWrapper)).toHaveLength(1);
    done();
  });
});
