import {
  openNav,
  closeNav,
  hideNav,
  exportImage,
  saveFile,
  trimString,
} from '../utils';
import {
  UPDATE_TITLE,
  UPDATE_VERSION,
  UPDATE_DATE,
  OPEN_NAV,
  CLOSE_NAV,
  HIDE_NAV,
  EXPORT_IMAGE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  UPDATE_NOTE_TITLE,
  UPDATE_NOTE_DESCRIPTION,
  SAVE_NOTE,
  SAVE_FILE,
  OPEN_FILE,
  UPDATE_STATE_FROM_FILE_DATA,
  UPDATE_NOTE_BACKGROUND_COLOR,
  UPDATE_NOTE_COLOR,
  RESET_NOTE_COLOR,
  DELETE_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE,
} from '../actions';
import cmsData from '../cms';
import { openFile } from '../utils';

export const appState = {
  app: {
    title: 'BMC-Creator',
    version: '1.0.0',
  },
  title: '',
  version: 'v1.0',
  date: new Date(),
  noteTitle: '',
  noteDescription: '',
  noteBackgroundColor: '#f5f8fa',
  noteTextColor: '#000000',
  activeKey: '',
  updateNoteKey: '',
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

    case UPDATE_NOTE_BACKGROUND_COLOR:
      return { ...state, noteBackgroundColor: payload };

    case UPDATE_NOTE_COLOR:
      return { ...state, noteTextColor: payload };

    case RESET_NOTE_COLOR:
      return {
        ...state,
        noteBackgroundColor: '#f5f8fa',
        noteTextColor: '#000000',
      };

    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true, activeKey: payload.activeKey };

    case CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false,
        activeKey: '',
        updateNoteKey: '',
        noteTitle: '',
        noteDescription: '',
      };

    case SAVE_NOTE:
      return state.activeKey
        ? {
            ...state,
            [state.activeKey]: {
              notes: [
                ...state[state.activeKey].notes,
                trimString(state.noteTitle).length > 0 ||
                trimString(state.noteDescription).length > 0
                  ? {
                      key: new Date().getTime(),
                      title: state.noteTitle,
                      description: state.noteDescription,
                      background: state.noteBackgroundColor,
                      color: state.noteTextColor,
                    }
                  : {},
              ],
            },
            isDialogOpen: false,
            activeKey: '',
            updateNoteKey: '',
            noteTitle: '',
            noteDescription: '',
          }
        : state;

    case EDIT_NOTE:
      let editItem =
        payload.activeKey &&
        state[payload.activeKey].notes.filter(
          (item) => item.key === payload.noteKey,
        );

      editItem = editItem[0];

      return {
        ...state,
        noteTitle: editItem.title,
        noteDescription: editItem.description,
        noteBackgroundColor: editItem.background,
        noteTextColor: editItem.color,
        isDialogOpen: true,
        activeKey: payload.activeKey,
        updateNoteKey: editItem.key,
      };

    case UPDATE_NOTE:
      let updateItem =
        state.activeKey &&
        state[state.activeKey].notes.filter(
          (item) => item.key === state.updateNoteKey,
        );

      updateItem = updateItem[0];

      updateItem.title = state.noteTitle;
      updateItem.description = state.noteDescription;
      updateItem.background = state.noteBackgroundColor;
      updateItem.color = state.noteTextColor;

      return {
        ...state,
        isDialogOpen: false,
        activeKey: '',
        updateNoteKey: '',
        noteTitle: '',
        noteDescription: '',
      };

    case DELETE_NOTE:
      const filteredState =
        payload.activeKey &&
        state[payload.activeKey].notes.filter(
          (item) => item.key !== payload.noteKey,
        );
      return {
        ...state,
        [payload.activeKey]: {
          notes: filteredState,
        },
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

    case SAVE_FILE:
      saveFile(
        state,
        state.title ? state.title : cmsData.default_export_file_name,
      );
      closeNav();
      return state;

    case OPEN_FILE:
      openFile(payload.callback);
      closeNav();
      return state;

    case UPDATE_STATE_FROM_FILE_DATA:
      try {
        state = JSON.parse(payload);
      } catch (ex) {}
      return state;

    default:
      return state;
  }
};
