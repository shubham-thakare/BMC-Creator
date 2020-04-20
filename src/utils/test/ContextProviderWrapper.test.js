import React from 'react';
import { shallow } from 'enzyme';
import { ContextProviderWrapper } from '../ContextProviderWrapper';

let wrapper;

describe('ContextProviderWrapper Component', () => {
  beforeAll(() => {
    wrapper = shallow(
      <ContextProviderWrapper>Test Component</ContextProviderWrapper>,
    );
  });

  it('ContextProviderWrapper using real state', async (done) => {
    expect(wrapper).toHaveLength(1);
    done();
  });
});
