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
} from './styles/BMCScreen.style';
import { KeyPartners } from './SectionsInfo/KeyPartners';
import { Popover } from './SectionsInfo/Popover';
import { KeyActivities } from './SectionsInfo/KeyActivities';
import { KeyResources } from './SectionsInfo/KeyResources';
import { ValuePropositions } from './SectionsInfo/ValuePropositions';
import { CustomerRelationships } from './SectionsInfo/CustomerRelationships';
import { Channels } from './SectionsInfo/Channels';
import { CustomerSegments } from './SectionsInfo/CustomerSegments';
import { CostStructure } from './SectionsInfo/CostStructure';
import { RevenueStreams } from './SectionsInfo/RevenueStreams';
import { AppContext } from '../../utils';
import { UPDATE_TITLE, UPDATE_VERSION, UPDATE_DATE } from '../../actions';
import cmsData from '../../cms';

const BMCScreen = () => {
  const {
    state,
    dispatch,
  } = useContext(AppContext);

  const { title, version, date } = state;

  const {
    p_canvas_title,
    p_na,
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
      <BMCScreenDiv id="canvas-screen">
        <BMCScreenHeaderGrid>
          <Div isTransparent>
            <TitleInput
              placeholder={p_canvas_title}
              value={title}
              onChange={
                (evt) => dispatch({ action: UPDATE_TITLE, payload: evt.target.value })
              }
            />
          </Div>
          <GridRow>
            <Flex>
              <Bold>{l_version}:</Bold>
              <BMCScreenInput
                placeholder={p_na}
                value={version}
                onChange={
                  (evt) => dispatch({ action: UPDATE_VERSION, payload: evt.target.value })
                }
              />
            </Flex>
            <Flex>
              <Bold>{l_date}:</Bold>
              <BMCScreenInput
                placeholder={p_na}
                value={date}
                onChange={
                  (evt) => dispatch({ action: UPDATE_DATE, payload: evt.target.value })
                }
              />
            </Flex>
          </GridRow>
        </BMCScreenHeaderGrid>
        <BMCScreenCanvasGrid>
          <Div className="bmc-key-partners">
            <SectionTitle icon="key_partners">
              <Popover content={<KeyPartners />}>{l_key_partners}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-key-activities">
            <SectionTitle icon="key_activities">
              <Popover content={<KeyActivities />}>{l_key_activities}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-key-resources">
            <SectionTitle icon="key_resources">
              <Popover content={<KeyResources />}>{l_key_resources}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-value-propositions">
            <SectionTitle icon="value_propositions">
              <Popover content={<ValuePropositions />}>{l_value_propositions}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-customer-ralationships">
            <SectionTitle icon="customer_relationships">
              <Popover content={<CustomerRelationships />}>{l_customer_relationships}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-channels">
            <SectionTitle icon="channels">
              <Popover content={<Channels />}>{l_channels}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-customer-segments">
            <SectionTitle icon="customer_segments">
              <Popover content={<CustomerSegments />}>{l_customer_segments}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-cost-structure">
            <SectionTitle icon="cost_structure">
              <Popover content={<CostStructure />}>{l_cost_structure}</Popover>
            </SectionTitle>
          </Div>
          <Div className="bmc-revenue-streams">
            <SectionTitle icon="revenue_streams">
              <Popover content={<RevenueStreams />}>{l_revenue_streams}</Popover>
            </SectionTitle>
          </Div>
        </BMCScreenCanvasGrid>
      </BMCScreenDiv>
    </>
  );
};

export default BMCScreen;
