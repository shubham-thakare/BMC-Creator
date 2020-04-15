/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import {
  StyledBMCScreen,
  StyledBMCScreenHeaderGrid,
  StyledBMCScreenCanvasGrid,
  StyledTitleInput,
  StyledBMCScreenInput,
  StyledGridRow,
  StyledFlex,
  StyledDiv,
  StyledSectionTitle,
  StyledBold,
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
import { AppContext } from '../../utils/Context';

const BMCScreen = () => {
  const {
    title,
    setTitle,
    version,
    setVersion,
    date,
    setDate,
    cmsData,
  } = useContext(AppContext);

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
      <StyledBMCScreen id="canvas-screen">
        <StyledBMCScreenHeaderGrid>
          <StyledDiv isTransparent>
            <StyledTitleInput
              placeholder={p_canvas_title}
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
          </StyledDiv>
          <StyledGridRow>
            <StyledFlex>
              <StyledBold>{l_version}:</StyledBold>
              <StyledBMCScreenInput
                placeholder={p_na}
                value={version}
                onChange={(evt) => setVersion(evt.target.value)}
              />
            </StyledFlex>
            <StyledFlex>
              <StyledBold>{l_date}:</StyledBold>
              <StyledBMCScreenInput
                placeholder={p_na}
                value={date}
                onChange={(evt) => setDate(evt.target.value)}
              />
            </StyledFlex>
          </StyledGridRow>
        </StyledBMCScreenHeaderGrid>
        <StyledBMCScreenCanvasGrid>
          <StyledDiv className="bmc-key-partners">
            <StyledSectionTitle icon="key_partners">
              <Popover content={<KeyPartners />}>{l_key_partners}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-key-activities">
            <StyledSectionTitle icon="key_activities">
              <Popover content={<KeyActivities />}>{l_key_activities}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-key-resources">
            <StyledSectionTitle icon="key_resources">
              <Popover content={<KeyResources />}>{l_key_resources}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-value-propositions">
            <StyledSectionTitle icon="value_propositions">
              <Popover content={<ValuePropositions />}>{l_value_propositions}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-customer-ralationships">
            <StyledSectionTitle icon="customer_relationships">
              <Popover content={<CustomerRelationships />}>{l_customer_relationships}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-channels">
            <StyledSectionTitle icon="channels">
              <Popover content={<Channels />}>{l_channels}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-customer-segments">
            <StyledSectionTitle icon="customer_segments">
              <Popover content={<CustomerSegments />}>{l_customer_segments}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-cost-structure">
            <StyledSectionTitle icon="cost_structure">
              <Popover content={<CostStructure />}>{l_cost_structure}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
          <StyledDiv className="bmc-revenue-streams">
            <StyledSectionTitle icon="revenue_streams">
              <Popover content={<RevenueStreams />}>{l_revenue_streams}</Popover>
            </StyledSectionTitle>
          </StyledDiv>
        </StyledBMCScreenCanvasGrid>
      </StyledBMCScreen>
    </>
  );
};

export default BMCScreen;
