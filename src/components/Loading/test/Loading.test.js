import React from 'react';
import { shallow } from 'enzyme';
import Loading from '..';
import { Spinner } from '@blueprintjs/core';

let wrapper;

describe('Loading Component', () => {
  beforeAll(() => {
    wrapper = shallow(<Loading />);
  });

  it('To match snapshot of Loading', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Spinner exists', async (done) => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
    done();
  });
});
