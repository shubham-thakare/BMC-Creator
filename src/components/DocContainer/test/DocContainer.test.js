import React from 'react';
import { mount } from 'enzyme';
import DocContainer from '..';
import { ContextProviderWrapper } from '../../../utils';
import { Icon } from '@blueprintjs/core';

let wrapper;

const props = {
  activeKey: 'keyPartners',
  message: 'Test Message',
  isEmpty: true,
  hasEditOption: true,
  hasAddOption: true,
  allowFullScreen: true,
};

describe('DocContainer Component', () => {
  beforeAll(() => {
    wrapper = mount(
      <ContextProviderWrapper useMockState>
        <DocContainer {...props}></DocContainer>
      </ContextProviderWrapper>,
    );
  });

  it('To match snapshot of DocContainer', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Add, Edit, and Fullscreen options exists', async (done) => {
    expect(wrapper.find(Icon)).toHaveLength(3);
    done();
  });

  it('Simulate add operation', async (done) => {
    const add = wrapper.find(Icon).at(1);
    add.simulate('click', { payload: { activeKey: 'keyPartners' } });
    done();
  });

  it('Tips exists', async (done) => {
    expect(wrapper.find('Tips')).toHaveLength(1);
    done();
  });

  it('Notes are being mapped perfectly', async (done) => {
    expect(wrapper.find('Note')).toHaveLength(4);
    done();
  });
});
