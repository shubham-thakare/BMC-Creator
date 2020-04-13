/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import {
  StyledBMCScreen,
  StyledBMCScreenHeaderGrid,
  StyledBMCScreenCanvasGrid,
  StyledTitleInput,
  StyledBMCScreenInput
} from "./styles/BMCScreen.style";
import { KeyPartners } from "./SectionsInfo/KeyPartners";
import { Popover } from "./SectionsInfo/Popover";
import { KeyActivities } from "./SectionsInfo/KeyActivities";
import { KeyResources } from "./SectionsInfo/KeyResources";
import { ValuePropositions } from "./SectionsInfo/ValuePropositions";
import { CustomerRelationships } from "./SectionsInfo/CustomerRelationships";
import { Channels } from "./SectionsInfo/Channels";
import { CustomerSegments } from "./SectionsInfo/CustomerSegments";
import { CostStructure } from "./SectionsInfo/CostStructure";
import { RevenueStreams } from "./SectionsInfo/RevenueStreams";
import { AppContext } from "../../App";

const BMCScreen = () => {
  const {title, setTitle, version, setVersion, date, setDate} = useContext(AppContext);

  return (
    <>
      <StyledBMCScreen id="canvas-screen">
        <StyledBMCScreenHeaderGrid>
          <div>
            <StyledTitleInput
              placeholder="Edit title..."
              value={title}
              onChange={evt => setTitle(evt.target.value)}
            />
          </div>
          <div className="row-grid">
            <div className="display-flex">
              <b>Version:</b>
              <StyledBMCScreenInput
                placeholder="NA"
                value={version}
                onChange={evt => setVersion(evt.target.value)}
              />
            </div>
            <div className="display-flex">
              <b>Date:</b>
              <StyledBMCScreenInput
                placeholder="NA"
                value={date}
                onChange={evt => setDate(evt.target.value)}
              />
            </div>
          </div>
        </StyledBMCScreenHeaderGrid>
        <StyledBMCScreenCanvasGrid>
          <div className="bmc-key-partners">
            <div className="bmc-screen--section__label icon-key-partners">
              <Popover content={<KeyPartners />}>Key Partners</Popover>
            </div>
          </div>
          <div className="bmc-key-activities">
            <div className="bmc-screen--section__label icon-key-activities">
              <Popover content={<KeyActivities />}>Key Activities</Popover>
            </div>
          </div>
          <div className="bmc-key-resources">
            <div className="bmc-screen--section__label icon-key-resources">
              <Popover content={<KeyResources />}>Key Resources</Popover>
            </div>
          </div>
          <div className="bmc-value-propositions">
            <div className="bmc-screen--section__label icon-value-prepositions">
              <Popover content={<ValuePropositions />}>
                Value Propositions
              </Popover>
            </div>
          </div>
          <div className="bmc-customer-ralationships">
            <div className="bmc-screen--section__label icon-customer-relationships">
              <Popover content={<CustomerRelationships />}>
                Costumer Relationships
              </Popover>
            </div>
          </div>
          <div className="bmc-channels">
            <div className="bmc-screen--section__label icon-channels">
              <Popover content={<Channels />}>Channels</Popover>
            </div>
          </div>
          <div className="bmc-customer-segments">
            <div className="bmc-screen--section__label icon-customer-segments">
              <Popover content={<CustomerSegments />}>
                Customer Segments
              </Popover>
            </div>
          </div>
          <div className="bmc-cost-structure">
            <div className="bmc-screen--section__label icon-cost-structure">
              <Popover content={<CostStructure />}>Cost Structure</Popover>
            </div>
          </div>
          <div className="bmc-revenue-streams">
            <div className="bmc-screen--section__label icon-revenue-streams">
              <Popover content={<RevenueStreams />}>Revenue Streams</Popover>
            </div>
          </div>
        </StyledBMCScreenCanvasGrid>
      </StyledBMCScreen>
    </>
  );
};

export default BMCScreen;
