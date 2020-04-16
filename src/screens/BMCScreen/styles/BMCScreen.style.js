import styled from 'styled-components';

const iconBackground = (iconURL) => `
    background-image: url(${iconURL});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 30px;
`;

export const BMCScreen = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
  padding: 10px;
  padding-left: 60px;
  transition: padding-left 0.5s;
  background: var(--app-background-color);
`;

export const BMCScreenHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: auto 170px;
  grid-gap: 10px;
`;

export const TitleInput = styled.input`
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  width: 600px;
  outline: none;
  border: 1px solid var(--app-background-color);
  background: var(--app-background-color);
  font-size: var(--title-input-font-size);
  font-weight: bold;
  color: var(--title-input-color);
  text-overflow: ellipsis;

  &::placeholder {
    color: var(--title-input-placeholder-color);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
      inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  }
`;

export const BMCScreenInput = styled.input`
  height: 25px;
  padding: 0 5px;
  border-radius: 5px;
  width: 170px;
  outline: none;
  border: 1px solid var(--app-background-color);
  background: var(--app-background-color);
  font-size: var(--input-font-size);
  color: var(--title-input-color);
  text-overflow: ellipsis;

  &::placeholder {
    color: var(--title-input-placeholder-color);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
      inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  }
`;

export const BMCScreenCanvasGrid = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    'key-partners key-partners key-activities key-activities value-propositions value-propositions customer-ralationships customer-ralationships customer-segments customer-segments'
    'key-partners key-partners key-activities key-activities value-propositions value-propositions customer-ralationships customer-ralationships customer-segments customer-segments'
    'key-partners key-partners key-activities key-activities value-propositions value-propositions customer-ralationships customer-ralationships customer-segments customer-segments'
    'key-partners key-partners key-activities key-activities value-propositions value-propositions customer-ralationships customer-ralationships customer-segments customer-segments'
    'key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments'
    'key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments'
    'key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments'
    'key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments'
    'cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams'
    'cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams'
    'cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams'
    'cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams';
  grid-gap: 5px;
  padding: 5px;
  background: var(--app-divider-color);

  .bmc-key-partners {
    grid-area: key-partners;
  }
  .bmc-key-activities {
    grid-area: key-activities;
  }
  .bmc-key-resources {
    grid-area: key-resources;
  }
  .bmc-value-propositions {
    grid-area: value-propositions;
  }
  .bmc-customer-ralationships {
    grid-area: customer-ralationships;
  }
  .bmc-channels {
    grid-area: channels;
  }
  .bmc-customer-segments {
    grid-area: customer-segments;
  }
  .bmc-cost-structure {
    grid-area: cost-structure;
  }
  .bmc-revenue-streams {
    grid-area: revenue-streams;
  }
`;

export const GridRow = styled.div`
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 100px;
`;

export const Div = styled.div`
  background: ${(props) =>
    props.isTransparent ? 'transparent' : 'var(--white-color)'};
  padding: 5px;
`;

export const SectionTitle = styled.div`
  display: block;
  min-height: 30px;
  font-size: large;
  font-weight: bold;
  user-select: none;
  -webkit-user-drag: none;
  padding-right: 35px;
  ${(props) =>
    iconBackground(
      process.env.PUBLIC_URL + '/assets/images/' + props.icon + '.svg',
    )}
`;

export const Bold = styled.b``;
