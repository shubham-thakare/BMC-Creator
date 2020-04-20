import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { SideNav } from '../components';
import { BMCScreen } from '../screens';
import { Link } from '../components/SideNav/styles/SideNav.style';

let wrapper;

describe('App Component', () => {
  beforeAll(() => {
    wrapper = mount(<App />);
  });

  it('To match snapshot of App', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('NavBar exists', async (done) => {
    expect(wrapper.find(SideNav)).toHaveLength(1);
    done();
  });

  it('Simulat NavBar link clicks', async (done) => {
    wrapper
    .find(SideNav)
    .find(Link)
    .at(0)
    .simulate('click');

    wrapper
    .find(SideNav)
    .find(Link)
    .at(1)
    .simulate('click');

    wrapper
    .find(SideNav)
    .find(Link)
    .at(2)
    .simulate('click');

    wrapper
    .find(SideNav)
    .find(Link)
    .at(3)
    .simulate('click');

    wrapper
    .find(SideNav)
    .find(Link)
    .at(4)
    .simulate('click');
    done();
  });

  it('BMCScreen exists', async (done) => {
    expect(wrapper.find(BMCScreen)).toHaveLength(1);
    done();
  });
});
