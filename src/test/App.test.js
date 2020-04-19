import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { SideNav } from '../components';
import { BMCScreen } from '../screens';

let wrapper;

describe('App Component', () => {
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('To match snapshot of App', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('NavBar exists', async (done) => {
    expect(wrapper.find(SideNav)).toHaveLength(1);
    done();
  });

  it('BMCScreen exists', async (done) => {
    expect(wrapper.find(BMCScreen)).toHaveLength(1);
    done();
  });
});
