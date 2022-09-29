/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import {
  BMCScreen as BMCScreenDiv,
  BMCScreenHeaderGrid,
  BMCScreenCanvasGrid,
  TitleInput,
  BMCScreenInput,
  GridRow,
  Flex,
  Div,
  SectionTitle,
  Bold,
  DatePickerStyled,
} from './styles/BMCScreen.style';
import { AppContext } from '../../utils';
import { UPDATE_TITLE, UPDATE_VERSION, UPDATE_DATE } from '../../actions';
import cmsData from '../../cms';
import {
  Popover,
  KeyPartners,
  KeyActivities,
  KeyResources,
  ValuePropositions,
  CustomerRelationships,
  Channels,
  CustomerSegments,
  CostStructure,
  RevenueStreams,
  DocContainer,
  NoteDialog,
} from '../../components';

const BMCScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  const { title, version, date } = state;

  const {
    p_canvas_title,
    p_na,
    p_get_started,
    l_version,
    l_date,
    l_key_partners,
    l_key_activities,
    l_key_resources,
    l_value_propositions,
    l_customer_relationships,
    l_channels,
    l_customer_segments,
    l_cost_structure,
    l_revenue_streams,
  } = cmsData;

  return (
    <>
      <NoteDialog />
      <BMCScreenDiv id="canvas-screen">
        <BMCScreenHeaderGrid>
          <Div isTransparent>
            <TitleInput
              placeholder={p_canvas_title}
              value={title}
              onChange={(evt) =>
                dispatch({ action: UPDATE_TITLE, payload: evt.target.value })
              }
              className="joyride-second-step"
            />
          </Div>
          <GridRow>
            <Flex>
              <Bold>{l_version}:</Bold>
              <BMCScreenInput
                placeholder={p_na}
                value={version}
                onChange={(evt) =>
                  dispatch({
                    action: UPDATE_VERSION,
                    payload: evt.target.value,
                  })
                }
                className="joyride-third-step"
              />
            </Flex>
            <Flex>
              <Bold>{l_date}:</Bold>
              <DatePickerStyled
                selected={date}
                onChange={(date) =>
                  dispatch({ action: UPDATE_DATE, payload: date })
                }
                className="joyride-fourth-step"
              />
            </Flex>
          </GridRow>
        </BMCScreenHeaderGrid>
        <BMCScreenCanvasGrid>
          <Div className="bmc-key-partners">
            <SectionTitle icon="key_partners" className="joyride-fifth-step">
              <Popover content={<KeyPartners />}>{l_key_partners}</Popover>
            </SectionTitle>
            <DocContainer
              activeKey="keyPartners"
              message={p_get_started}
              hasAddOption
            />
          </Div>
          <Div className="bmc-key-activities">
            <SectionTitle icon="key_activities">
              <Popover content={<KeyActivities />}>{l_key_activities}</Popover>
            </SectionTitle>
            <DocContainer activeKey="keyActivities" hasAddOption />
          </Div>
          <Div className="bmc-key-resources">
            <SectionTitle icon="key_resources">
              <Popover content={<KeyResources />}>{l_key_resources}</Popover>
            </SectionTitle>
            <DocContainer activeKey="keyResources" hasAddOption />
          </Div>
          <Div className="bmc-value-propositions">
            <SectionTitle icon="value_propositions">
              <Popover content={<ValuePropositions />}>
                {l_value_propositions}
              </Popover>
            </SectionTitle>
            <DocContainer activeKey="valuePropositions" hasAddOption />
          </Div>
          <Div className="bmc-customer-ralationships">
            <SectionTitle icon="customer_relationships">
              <Popover content={<CustomerRelationships />}>
                {l_customer_relationships}
              </Popover>
            </SectionTitle>
            <DocContainer activeKey="customerRelationships" hasAddOption />
          </Div>
          <Div className="bmc-channels">
            <SectionTitle icon="channels">
              <Popover content={<Channels />}>{l_channels}</Popover>
            </SectionTitle>
            <DocContainer activeKey="channels" hasAddOption />
          </Div>
          <Div className="bmc-customer-segments">
            <SectionTitle icon="customer_segments">
              <Popover content={<CustomerSegments />}>
                {l_customer_segments}
              </Popover>
            </SectionTitle>
            <DocContainer activeKey="customerSegments" hasAddOption />
          </Div>
          <Div className="bmc-cost-structure">
            <SectionTitle icon="cost_structure">
              <Popover content={<CostStructure />}>{l_cost_structure}</Popover>
            </SectionTitle>
            <DocContainer activeKey="costStructure" hasAddOption />
          </Div>
          <Div className="bmc-revenue-streams">
            <SectionTitle icon="revenue_streams">
              <Popover content={<RevenueStreams />}>
                {l_revenue_streams}
              </Popover>
            </SectionTitle>
            <DocContainer activeKey="revenueStreams" hasAddOption />
          </Div>
        </BMCScreenCanvasGrid>
      </BMCScreenDiv>
    </>
  );
};

export default BMCScreen;
