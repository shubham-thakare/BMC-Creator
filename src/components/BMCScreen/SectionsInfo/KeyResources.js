import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';

export const KeyResources = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        What key resources do our value propositions require?
      </PopoverQuestion>
      <PopoverQuestion>Our distribution channels?</PopoverQuestion>
      <PopoverQuestion>Customer relationships?</PopoverQuestion>
      <PopoverQuestion>Revenue streams?</PopoverQuestion>
      <br />
      <PopoverHintTitle>Types of resources</PopoverHintTitle>
      <PopoverHintText>Physical</PopoverHintText>
      <PopoverHintText>
        Intellectual (brand patents, copyrights, data)
      </PopoverHintText>
      <PopoverHintText>Human</PopoverHintText>
      <PopoverHintText>Financial</PopoverHintText>
    </PopoverBody>
  );
};
