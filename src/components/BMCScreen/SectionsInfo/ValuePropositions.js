import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';

export const ValuePropositions = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        What value do we deliver to the customer?
      </PopoverQuestion>
      <PopoverQuestion>
        Which one of our customer's problems are we helping to solve?
      </PopoverQuestion>
      <PopoverQuestion>
        What bundles of products and services are we offering to each customer
        segment?
      </PopoverQuestion>
      <PopoverQuestion>Which customer needs are we satisfying?</PopoverQuestion>
      <br />
      <PopoverHintTitle>CHARACTERISTICS</PopoverHintTitle>
      <PopoverHintText>Newness</PopoverHintText>
      <PopoverHintText>Performance</PopoverHintText>
      <PopoverHintText>Customization</PopoverHintText>
      <PopoverHintText>"Getting the job done"</PopoverHintText>
      <PopoverHintText>Design</PopoverHintText>
      <PopoverHintText>Brand/Status</PopoverHintText>
      <PopoverHintText>Price</PopoverHintText>
      <PopoverHintText>Cost reduction</PopoverHintText>
      <PopoverHintText>Risk reduction</PopoverHintText>
      <PopoverHintText>Accessibility</PopoverHintText>
      <PopoverHintText>Convenience/Usability</PopoverHintText>
    </PopoverBody>
  );
};
