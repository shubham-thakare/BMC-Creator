import { openNav, closeNav, hideNav, exportImage } from '../utils';
import {
  UPDATE_TITLE,
  UPDATE_VERSION,
  UPDATE_DATE,
  OPEN_NAV,
  CLOSE_NAV,
  HIDE_NAV,
  EXPORT_IMAGE,
} from '../actions';
import cmsData from '../cms';
import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  UPDATE_NOTE_TITLE,
  UPDATE_NOTE_DESCRIPTION,
  SAVE_NOTE,
} from '../actions/actions';

export const appState = {
  title: '',
  version: '',
  date: '',
  noteTitle: '',
  noteDescription: '',
  activeKey: '',
  isDialogOpen: false,
  keyPartners: { notes: [] },
  keyActivities: { notes: [] },
  keyResources: { notes: [] },
  valuePropositions: { notes: [] },
  customerRelationships: { notes: [] },
  channels: { notes: [] },
  customerSegments: { notes: [] },
  costStructure: { notes: [] },
  revenueStreams: { notes: [] },
};

export const reducer = (state, dispatch) => {
  const { action, payload } = dispatch;
  switch (action) {
    case UPDATE_TITLE:
      return { ...state, title: payload };

    case UPDATE_VERSION:
      return { ...state, version: payload };

    case UPDATE_DATE:
      return { ...state, date: payload };

    case UPDATE_NOTE_TITLE:
      return { ...state, noteTitle: payload };

    case UPDATE_NOTE_DESCRIPTION:
      return { ...state, noteDescription: payload };

    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true, activeKey: payload.activeKey };

    case CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false,
        activeKey: '',
        noteTitle: '',
        noteDescription: '',
      };

    case SAVE_NOTE:
      return {
        ...state,
        [state.activeKey]: {
          notes: [
            ...state[state.activeKey].notes,
            {
              title: state.noteTitle,
              description: state.noteDescription,
            }
          ]
        },
        isDialogOpen: false,
        activeKey: '',
        noteTitle: '',
        noteDescription: '',
      };

    case OPEN_NAV:
      openNav();
      return state;

    case CLOSE_NAV:
      closeNav();
      return state;

    case HIDE_NAV:
      hideNav();
      return state;

    case EXPORT_IMAGE:
      exportImage(state.title ? state.title : cmsData.default_export_file_name);
      return state;

    default:
      return state;
  }
};
