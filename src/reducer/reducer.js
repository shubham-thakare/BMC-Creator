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
import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions/actions';

export const appState = {
  title: '',
  version: '',
  date: '',
  isDialogOpen: false,
  keyPartners: [],
  keyActivities: [],
  keyResources: [],
  valuePropositions: [],
  customerRelationships: [],
  channels: [],
  customerSegments: [],
  costStructure: [],
  revenueStreams: [],
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
    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
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
