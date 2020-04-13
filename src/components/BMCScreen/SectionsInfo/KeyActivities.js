import React from "react";
import { PopoverQuestion, PopoverHintTitle, PopoverHintText, PopoverBody } from "./Common";

export const KeyActivities = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        What key activities do our value propositions require?
      </PopoverQuestion>
      <PopoverQuestion>Our distribution channels?</PopoverQuestion>
      <PopoverQuestion>Customer relationships?</PopoverQuestion>
      <PopoverQuestion>Revenue streams?</PopoverQuestion>
      <br />
      <PopoverHintTitle>Categories</PopoverHintTitle>
      <PopoverHintText>Production</PopoverHintText>
      <PopoverHintText>Problem solving</PopoverHintText>
      <PopoverHintText>Platform/Network</PopoverHintText>
    </PopoverBody>
  );
};
