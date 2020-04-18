import React, { useContext } from 'react';
import { NoteDialogWrapper, Div } from './styles/NoteDialog.style';
import {
  Dialog,
  Classes,
  H1,
  EditableText,
  Button,
  Intent,
} from '@blueprintjs/core';
import {
  CLOSE_DIALOG,
  UPDATE_NOTE_TITLE,
  UPDATE_NOTE_DESCRIPTION,
  SAVE_NOTE,
  UPDATE_NOTE_BACKGROUND_COLOR,
  UPDATE_NOTE_COLOR,
} from '../../actions';
import { AppContext } from '../../utils';
import cmsData from '../../cms';
import Note from '../Note';
import { ColorPicker } from '..';
import { RESET_NOTE_COLOR } from '../../actions/actions';

const NoteDialog = () => {
  const { state, dispatch } = useContext(AppContext);
  const {
    isDialogOpen,
    noteTitle,
    noteDescription,
    noteBackgroundColor,
    noteTextColor,
  } = state;
  const {
    p_edit_note_title,
    p_edit_note_desc,
    b_close,
    b_save,
    l_note_background_color,
    l_note_text_color,
    b_reset_color,
    l_sample_note_title,
    l_sample_note_description,
  } = cmsData;

  return (
    <NoteDialogWrapper>
      <Dialog isOpen={isDialogOpen}>
        <Div className={Classes.DIALOG_BODY}>
          <H1>
            <EditableText
              selectAllOnFocus
              placeholder={p_edit_note_title}
              value={noteTitle}
              onChange={(evt) =>
                dispatch({ action: UPDATE_NOTE_TITLE, payload: evt })
              }
            />
          </H1>
          <EditableText
            alwaysRenderInput
            maxLines={10}
            minLines={5}
            multiline={true}
            placeholder={p_edit_note_desc}
            value={noteDescription}
            onChange={(evt) =>
              dispatch({ action: UPDATE_NOTE_DESCRIPTION, payload: evt })
            }
          />
          <br />
          <Div style={{ display: 'grid', gridTemplateColumns: '220px auto' }}>
            <Div>
              <Div>
                <ColorPicker
                  label={l_note_background_color}
                  value={noteBackgroundColor}
                  onChange={(evt) => {
                    dispatch({
                      action: UPDATE_NOTE_BACKGROUND_COLOR,
                      payload: evt.target.value,
                    });
                  }}
                />
              </Div>
              <Div>
                <ColorPicker
                  label={l_note_text_color}
                  value={noteTextColor}
                  onChange={(evt) => {
                    dispatch({
                      action: UPDATE_NOTE_COLOR,
                      payload: evt.target.value,
                    });
                  }}
                />
              </Div>
              <Button
                intent={Intent.DANGER}
                outlined
                onClick={() => dispatch({ action: RESET_NOTE_COLOR })}
              >
                {b_reset_color}
              </Button>
            </Div>
            <Note
              item={{
                title: l_sample_note_title,
                description: l_sample_note_description,
                background: noteBackgroundColor,
                color: noteTextColor,
              }}
              activeKey=""
              style={{ maxWidth: '300px', maxHeight: '60px' }}
            />
          </Div>
        </Div>
        <Div className={Classes.DIALOG_FOOTER}>
          <Div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button onClick={() => dispatch({ action: CLOSE_DIALOG })}>
              {b_close}
            </Button>
            <Button
              intent={Intent.PRIMARY}
              onClick={() => dispatch({ action: SAVE_NOTE })}
            >
              {b_save}
            </Button>
          </Div>
        </Div>
      </Dialog>
    </NoteDialogWrapper>
  );
};

export default NoteDialog;
