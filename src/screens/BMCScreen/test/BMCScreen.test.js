import React from 'react';
import { mount } from 'enzyme';
import BMCScreen from '..';
import {
  BMCScreen as BMCScreenDiv,
  TitleInput,
  BMCScreenInput,
  BMCScreenHeaderGrid,
  BMCScreenCanvasGrid,
  SectionTitle,
} from '../styles/BMCScreen.style';
import { ContextProviderWrapper } from '../../../utils';
import { NoteDialog, Popover, DocContainer } from '../../../components';

let wrapper;

describe('App Component', () => {
  beforeAll(() => {
    wrapper = mount(
      <ContextProviderWrapper useMockState>
        <BMCScreen />
      </ContextProviderWrapper>,
    );
  });

  it('To match snapshot of BMCScreen', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('BMCScreen should have a NoteDialog', async (done) => {
    expect(wrapper.find(NoteDialog)).toHaveLength(1);
    done();
  });

  it('BMCScreen should have a BMCScreenDiv', async (done) => {
    expect(wrapper.find(BMCScreenDiv)).toHaveLength(1);
    done();
  });

  it('BMCScreen should have a BMCScreenHeaderGrid', async (done) => {
    expect(wrapper.find(BMCScreenHeaderGrid)).toHaveLength(1);
    done();
  });

  it('BMCScreen should have a BMCScreenCanvasGrid', async (done) => {
    expect(wrapper.find(BMCScreenCanvasGrid)).toHaveLength(1);
    done();
  });

  it('BMCScreen should have 9 SectionTitle', async (done) => {
    expect(wrapper.find(SectionTitle)).toHaveLength(9);
    done();
  });

  it('BMCScreen should have 9 Popover', async (done) => {
    expect(wrapper.find(Popover)).toHaveLength(9);
    done();
  });

  it('BMCScreen should have 9 DocContainer', async (done) => {
    expect(wrapper.find(DocContainer)).toHaveLength(9);
    done();
  });

  it('BMCScreen should have a TitleInput', async (done) => {
    expect(wrapper.find(TitleInput)).toHaveLength(1);
    done();
  });

  it('BMCScreen should have two BMCScreenInputs', async (done) => {
    expect(wrapper.find(BMCScreenInput)).toHaveLength(2);
    done();
  });

  it('Simulate TitleInput onChange', async (done) => {
    wrapper.find(TitleInput).simulate('change', { target: { value: 'Test Title' } });
    done();
  });

  it('Simulate Version BMCScreenInput onChange', async (done) => {
    wrapper.find(BMCScreenInput).at(0).simulate('change', { target: { value: 'Test Version' } });
    done();
  });

  it('Simulate Date BMCScreenInput onChange', async (done) => {
    wrapper.find(BMCScreenInput).at(1).simulate('change', { target: { value: 'Test Date' } });
    done();
  });
});
