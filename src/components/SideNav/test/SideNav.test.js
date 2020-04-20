import React from 'react';
import { mount } from 'enzyme';
import { Divider } from '@blueprintjs/core';
import SideNav from '..';
import { ContextProviderWrapper } from '../../../utils';
import { Link, ToggleHide, AppTitle, Footer } from '../styles/SideNav.style';

let wrapper;

const props = {
  hasSaveFileOption: true,
  hasOpenFileOption: true,
  hasPrintOption: true,
  hasExportOption: true,
  hasPresentationModeOption: true,
  hasFooter: true,
};

describe('SideNav Component', () => {
  beforeAll(() => {
    wrapper = mount(
      <ContextProviderWrapper useMockState>
        <SideNav {...props} />
      </ContextProviderWrapper>,
    );
  });

  it('To match snapshot of SideNav', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Should have 8 links', async (done) => {
    expect(wrapper.find(Link)).toHaveLength(8);
    done();
  });

  it('Should have 1 ToggleHide component', async (done) => {
    expect(wrapper.find(ToggleHide)).toHaveLength(1);
    done();
  });

  it('Should have 1 AppTitle component', async (done) => {
    expect(wrapper.find(AppTitle)).toHaveLength(1);
    done();
  });

  describe('Footer Component', () => {
    it('Should have 1 Divider component', async (done) => {
      expect(wrapper.find(Footer).find(Divider)).toHaveLength(1);
      done();
    });
    it('Should have 1 Link', async (done) => {
      expect(wrapper.find(Footer).find(Link)).toHaveLength(1);
      done();
    });
  });

  it('Simulate Link clicks', async (done) => {
    wrapper
      .find(Link)
      .at(0)
      .simulate('click');
    wrapper
      .find(Link)
      .at(1)
      .simulate('click');
    wrapper
      .find(Link)
      .at(2)
      .simulate('click');
    wrapper
      .find(Link)
      .at(3)
      .simulate('click');
    wrapper
      .find(Link)
      .at(4)
      .simulate('click');
    wrapper
      .find(Link)
      .at(5)
      .simulate('click');
    wrapper
      .find(Link)
      .at(6)
      .simulate('click');
    wrapper
      .find(Link)
      .at(7)
      .simulate('click');
    done();
  });
});
