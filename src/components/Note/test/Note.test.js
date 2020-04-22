import React from 'react';
import { mount } from 'enzyme';
import Note from '..';
import { ContextProviderWrapper } from '../../../utils';
import { mockState } from '../../../mock';
import { NoteTitle, NoteDescription, NoteWrapper } from '../styles/Note.style';
import { Popover, Menu } from '@blueprintjs/core';
import { NoteMenu } from '../Note';

let wrapper, wrapper2, contextMenu;

const props = {
  item: mockState.keyPartners.notes[0],
  activeKey: 'keyPartners',
};

const props2 = {
  item: mockState.keyPartners.notes[2],
  activeKey: 'keyPartners',
};

const contextMenuProps = {
  noteKey: 1587532687006,
  activeKey: 'keyPartners',
};

describe('Note Component', () => {
  beforeAll(() => {
    wrapper = mount(<Note {...props} />);

    wrapper2 = mount(<Note {...props2} />);

    contextMenu = mount(
      <ContextProviderWrapper useMockState>
        <NoteMenu {...contextMenuProps} />
      </ContextProviderWrapper>,
    );
  });

  it('To match snapshot of Note', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Context menu popover exists', async (done) => {
    expect(wrapper.find(Popover)).toHaveLength(1);
    done();
  });

  it('NoteWrapper exists', async (done) => {
    expect(wrapper.find(NoteWrapper)).toHaveLength(1);
    done();
  });

  it('Title exists', async (done) => {
    expect(wrapper.find(NoteTitle)).toHaveLength(1);
    done();
  });

  it('Description exists', async (done) => {
    expect(wrapper.find(NoteDescription)).toHaveLength(1);
    done();
  });

  it('Context menu exists', async (done) => {
    expect(contextMenu.find(Menu)).toHaveLength(1);
    done();
  });

  it('Simulate Edit operation', async (done) => {
    const add = contextMenu
      .find(Menu.Item)
      .find('li')
      .find('a')
      .at(0);
    add.simulate('click', {
      payload: { activeKey: 'keyPartners', noteKey: '1587532687006' },
    });
    done();
  });

  it('Simulate delete operation', async (done) => {
    const add = contextMenu
      .find(Menu.Item)
      .find('li')
      .find('a')
      .at(1);
    add.simulate('click');
    done();
  });

  it('Only description found in Note', async (done) => {
    expect(wrapper2.find(NoteDescription)).toHaveLength(1);
    done();
  });
});
