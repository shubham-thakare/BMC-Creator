import React from 'react';
import { mount } from 'enzyme';
import NoteDialog from '..';
import { ContextProviderWrapper } from '../../../utils';
import { Dialog, EditableText, Button } from '@blueprintjs/core';
import { ColorPicker, Note } from '../..';

let wrapper;

describe('Dialog Component', () => {
  beforeAll(() => {
    wrapper = mount(
      <ContextProviderWrapper useMockState>
        <NoteDialog />
      </ContextProviderWrapper>,
    );
  });

  it('To match snapshot of NoteDialog', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Dialog exists', async (done) => {
    expect(wrapper.find(Dialog)).toHaveLength(1);
    done();
  });

  it('Dialog contains two EditableText inputs', async (done) => {
    expect(wrapper.find(Dialog).find(EditableText)).toHaveLength(2);
    done();
  });

  it('Simulate title EditableText onChange', async (done) => {
    wrapper
      .find(Dialog)
      .find(EditableText)
      .at(0)
      .props()
      .onChange('Test Title');
    done();
  });

  it('Simulate description EditableText onChange', async (done) => {
    wrapper
      .find(Dialog)
      .find(EditableText)
      .at(1)
      .props()
      .onChange('Test Description');
    done();
  });

  it('Dialog contains two ColorPicker inputs', async (done) => {
    expect(wrapper.find(Dialog).find(ColorPicker)).toHaveLength(2);
    done();
  });

  it('Simulate background ColorPicker onChange', async (done) => {
    const component = wrapper
      .find(Dialog)
      .find(ColorPicker)
      .at(0)
      .find('input');
    component.simulate('change', { target: { value: '#000000' } });
    done();
  });

  it('Simulate text ColorPicker onChange', async (done) => {
    const component = wrapper
      .find(Dialog)
      .find(ColorPicker)
      .at(1)
      .find('input');
    component.simulate('change', { target: { value: '#000000' } });
    done();
  });

  it('Dialog contains one Note component', async (done) => {
    expect(wrapper.find(Dialog).find(Note)).toHaveLength(1);
    done();
  });

  it('Dialog contains three buttons', async (done) => {
    expect(wrapper.find(Dialog).find(Button)).toHaveLength(3);
    done();
  });

  it('Simulate click for reset colors button', async (done) => {
    let component = wrapper
      .find(Dialog)
      .find(Button)
      .at(0);
    component.simulate('click');
    done();
  });

  it('Simulate click for cancel button', async (done) => {
    let component = wrapper
      .find(Dialog)
      .find(Button)
      .at(1);
    component.simulate('click');
    done();
  });

  it('Simulate click for save button', async (done) => {
    let component = wrapper
      .find(Dialog)
      .find(Button)
      .at(2);
    component.simulate('click');
    done();
  });
});
