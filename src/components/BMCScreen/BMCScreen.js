/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import {
  StyledBMCScreen,
  StyledBMCScreenHeaderGrid,
  StyledBMCScreenCanvasGrid,
  StyledTitleInput,
  StyledBMCScreenInput,
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
          <div>
            <StyledTitleInput
              placeholder={p_canvas_title}
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
          </div>
          <div className="row-grid">
            <div className="display-flex">
              <b>{l_version}:</b>
              <StyledBMCScreenInput
                placeholder={p_na}
                value={version}
                onChange={(evt) => setVersion(evt.target.value)}
              />
            </div>
            <div className="display-flex">
              <b>{l_date}:</b>
              <StyledBMCScreenInput
                placeholder={p_na}
                value={date}
                onChange={(evt) => setDate(evt.target.value)}
              />
            </div>
          </div>
        </StyledBMCScreenHeaderGrid>
        <StyledBMCScreenCanvasGrid>
          <div className="bmc-key-partners">
            <div className="bmc-screen--section__label icon-key-partners">
              <Popover content={<KeyPartners />}>{l_key_partners}</Popover>
            </div>
          </div>
          <div className="bmc-key-activities">
            <div className="bmc-screen--section__label icon-key-activities">
              <Popover content={<KeyActivities />}>{l_key_activities}</Popover>
            </div>
          </div>
          <div className="bmc-key-resources">
            <div className="bmc-screen--section__label icon-key-resources">
              <Popover content={<KeyResources />}>{l_key_resources}</Popover>
            </div>
          </div>
          <div className="bmc-value-propositions">
            <div className="bmc-screen--section__label icon-value-prepositions">
              <Popover content={<ValuePropositions />}>{l_value_propositions}</Popover>
            </div>
          </div>
          <div className="bmc-customer-ralationships">
            <div className="bmc-screen--section__label icon-customer-relationships">
              <Popover content={<CustomerRelationships />}>
                {l_customer_relationships}
              </Popover>
            </div>
          </div>
          <div className="bmc-channels">
            <div className="bmc-screen--section__label icon-channels">
              <Popover content={<Channels />}>{l_channels}</Popover>
            </div>
          </div>
          <div className="bmc-customer-segments">
            <div className="bmc-screen--section__label icon-customer-segments">
              <Popover content={<CustomerSegments />}>{l_customer_segments}</Popover>
            </div>
          </div>
          <div className="bmc-cost-structure">
            <div className="bmc-screen--section__label icon-cost-structure">
              <Popover content={<CostStructure />}>{l_cost_structure}</Popover>
            </div>
          </div>
          <div className="bmc-revenue-streams">
            <div className="bmc-screen--section__label icon-revenue-streams">
              <Popover content={<RevenueStreams />}>{l_revenue_streams}</Popover>
            </div>
          </div>
        </StyledBMCScreenCanvasGrid>
      </StyledBMCScreen>
    </>
  );
};

export default BMCScreen;
