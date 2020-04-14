import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';

export const CustomerRelationships = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        What type of relationship does each of our customer segments expect us
        to establish and maintain with them?
      </PopoverQuestion>
      <PopoverQuestion>Which ones have we established?</PopoverQuestion>
      <PopoverQuestion>
        How are they integrated with the rest of our business model?
      </PopoverQuestion>
      <PopoverQuestion>How costly are they?</PopoverQuestion>
      <br />
      <PopoverHintTitle>EXAMPLES</PopoverHintTitle>
      <PopoverHintText>Personal assistance</PopoverHintText>
      <PopoverHintText>Dedicated personal assistance</PopoverHintText>
      <PopoverHintText>Self-service</PopoverHintText>
      <PopoverHintText>Automated services</PopoverHintText>
      <PopoverHintText>Communities</PopoverHintText>
      <PopoverHintText>Co-creation</PopoverHintText>
    </PopoverBody>
  );
};
