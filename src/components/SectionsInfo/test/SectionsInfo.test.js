import React from 'react';
import { shallow } from 'enzyme';
import {
  KeyPartners,
  KeyActivities,
  KeyResources,
  ValuePropositions,
  CustomerRelationships,
  Channels,
  CustomerSegments,
  CostStructure,
  RevenueStreams,
  PopoverBody,
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
} from '..';

let KeyPartnersWrapper;
let KeyActivitiesWrapper;
let KeyResourcesWrapper;
let ValuePropositionsWrapper;
let CustomerRelationshipsWrapper;
let ChannelsWrapper;
let CustomerSegmentsWrapper;
let CostStructureWrapper;
let RevenueStreamsWrapper;

describe('SectionsInfo Components', () => {
  beforeAll(() => {
    KeyPartnersWrapper = shallow(<KeyPartners />);
    KeyActivitiesWrapper = shallow(<KeyActivities />);
    KeyResourcesWrapper = shallow(<KeyResources />);
    ValuePropositionsWrapper = shallow(<ValuePropositions />);
    CustomerRelationshipsWrapper = shallow(<CustomerRelationships />);
    ChannelsWrapper = shallow(<Channels />);
    CustomerSegmentsWrapper = shallow(<CustomerSegments />);
    CostStructureWrapper = shallow(<CostStructure />);
    RevenueStreamsWrapper = shallow(<RevenueStreams />);
  });

  describe('KeyPartners Component', () => {
    it('To match snapshot of KeyPartners', async (done) => {
      expect(KeyPartnersWrapper).toMatchSnapshot();
      done();
    });
    it('KeyPartners should contain 1 PopoverBody, 4 PopoverQuestions, 1 PopoverHintTitle, and 3 PopoverHintText', async (done) => {
      expect(KeyPartnersWrapper.find(PopoverBody)).toHaveLength(1);
      expect(KeyPartnersWrapper.find(PopoverQuestion)).toHaveLength(4);
      expect(KeyPartnersWrapper.find(PopoverHintTitle)).toHaveLength(1);
      expect(KeyPartnersWrapper.find(PopoverHintText)).toHaveLength(3);
      done();
    });
  });

  describe('KeyActivities Component', () => {
    it('To match snapshot of KeyActivities', async (done) => {
      expect(KeyActivitiesWrapper).toMatchSnapshot();
      done();
    });
    it('KeyActivities should contain 1 PopoverBody, 4 PopoverQuestions, 1 PopoverHintTitle, and 3 PopoverHintText', async (done) => {
      expect(KeyActivitiesWrapper.find(PopoverBody)).toHaveLength(1);
      expect(KeyActivitiesWrapper.find(PopoverQuestion)).toHaveLength(4);
      expect(KeyActivitiesWrapper.find(PopoverHintTitle)).toHaveLength(1);
      expect(KeyActivitiesWrapper.find(PopoverHintText)).toHaveLength(3);
      done();
    });
  });

  describe('KeyResources Component', () => {
    it('To match snapshot of KeyResources', async (done) => {
      expect(KeyResourcesWrapper).toMatchSnapshot();
      done();
    });
    it('KeyResources should contain 1 PopoverBody, 4 PopoverQuestions, 1 PopoverHintTitle, and 4 PopoverHintText', async (done) => {
      expect(KeyResourcesWrapper.find(PopoverBody)).toHaveLength(1);
      expect(KeyResourcesWrapper.find(PopoverQuestion)).toHaveLength(4);
      expect(KeyResourcesWrapper.find(PopoverHintTitle)).toHaveLength(1);
      expect(KeyResourcesWrapper.find(PopoverHintText)).toHaveLength(4);
      done();
    });
  });

  describe('ValuePropositions Component', () => {
    it('To match snapshot of ValuePropositions', async (done) => {
      expect(ValuePropositionsWrapper).toMatchSnapshot();
      done();
    });
    it('ValuePropositions should contain 1 PopoverBody, 4 PopoverQuestions, 1 PopoverHintTitle, and 11 PopoverHintText', async (done) => {
      expect(ValuePropositionsWrapper.find(PopoverBody)).toHaveLength(1);
      expect(ValuePropositionsWrapper.find(PopoverQuestion)).toHaveLength(4);
      expect(ValuePropositionsWrapper.find(PopoverHintTitle)).toHaveLength(1);
      expect(ValuePropositionsWrapper.find(PopoverHintText)).toHaveLength(11);
      done();
    });
  });

  describe('CustomerRelationships Component', () => {
    it('To match snapshot of CustomerRelationships', async (done) => {
      expect(CustomerRelationshipsWrapper).toMatchSnapshot();
      done();
    });
    it('CustomerRelationships should contain 1 PopoverBody, 4 PopoverQuestions, 1 PopoverHintTitle, and 6 PopoverHintText', async (done) => {
      expect(CustomerRelationshipsWrapper.find(PopoverBody)).toHaveLength(1);
      expect(CustomerRelationshipsWrapper.find(PopoverQuestion)).toHaveLength(
        4,
      );
      expect(CustomerRelationshipsWrapper.find(PopoverHintTitle)).toHaveLength(
        1,
      );
      expect(CustomerRelationshipsWrapper.find(PopoverHintText)).toHaveLength(
        6,
      );
      done();
    });
  });

  describe('Channels Component', () => {
    it('To match snapshot of Channels', async (done) => {
      expect(ChannelsWrapper).toMatchSnapshot();
      done();
    });
    it('Channels should contain 1 PopoverBody, 6 PopoverQuestions, 6 PopoverHintTitle, and 5 PopoverHintText', async (done) => {
      expect(ChannelsWrapper.find(PopoverBody)).toHaveLength(1);
      expect(ChannelsWrapper.find(PopoverQuestion)).toHaveLength(6);
      expect(ChannelsWrapper.find(PopoverHintTitle)).toHaveLength(6);
      expect(ChannelsWrapper.find(PopoverHintText)).toHaveLength(5);
      done();
    });
  });

  describe('CustomerSegments Component', () => {
    it('To match snapshot of CustomerSegments', async (done) => {
      expect(CustomerSegmentsWrapper).toMatchSnapshot();
      done();
    });
    it('CustomerSegments should contain 1 PopoverBody, 2 PopoverQuestions, and 5 PopoverHintText', async (done) => {
      expect(CustomerSegmentsWrapper.find(PopoverBody)).toHaveLength(1);
      expect(CustomerSegmentsWrapper.find(PopoverQuestion)).toHaveLength(2);
      expect(CustomerSegmentsWrapper.find(PopoverHintText)).toHaveLength(5);
      done();
    });
  });

  describe('CostStructure Component', () => {
    it('To match snapshot of CostStructure', async (done) => {
      expect(CostStructureWrapper).toMatchSnapshot();
      done();
    });
    it('CostStructure should contain 1 PopoverBody, 3 PopoverQuestions, 2 PopoverHintTitle, and 6 PopoverHintText', async (done) => {
      expect(CostStructureWrapper.find(PopoverBody)).toHaveLength(1);
      expect(CostStructureWrapper.find(PopoverQuestion)).toHaveLength(3);
      expect(CostStructureWrapper.find(PopoverHintTitle)).toHaveLength(2);
      expect(CostStructureWrapper.find(PopoverHintText)).toHaveLength(6);
      done();
    });
  });

  describe('RevenueStreams Component', () => {
    it('To match snapshot of RevenueStreams', async (done) => {
      expect(RevenueStreamsWrapper).toMatchSnapshot();
      done();
    });
    it('RevenueStreams should contain 1 PopoverBody, 5 PopoverQuestions, and 1 Table', async (done) => {
      expect(RevenueStreamsWrapper.find(PopoverBody)).toHaveLength(1);
      expect(RevenueStreamsWrapper.find(PopoverQuestion)).toHaveLength(5);
      expect(RevenueStreamsWrapper.find('table')).toHaveLength(1);
      done();
    });
  });
});
