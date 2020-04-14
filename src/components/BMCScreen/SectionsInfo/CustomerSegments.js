import React from 'react';
import { PopoverQuestion, PopoverHintText, PopoverBody } from './Common';

export const CustomerSegments = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>For whom are we creating value?</PopoverQuestion>
      <PopoverQuestion>Who are our most important customers?</PopoverQuestion>
      <br />
      <PopoverHintText>Mass market</PopoverHintText>
      <PopoverHintText>Niche market</PopoverHintText>
      <PopoverHintText>Segmented</PopoverHintText>
      <PopoverHintText>Diversified</PopoverHintText>
      <PopoverHintText>Multi-sided platform</PopoverHintText>
    </PopoverBody>
  );
};
