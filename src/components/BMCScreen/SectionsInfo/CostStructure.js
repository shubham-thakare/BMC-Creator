import React from "react";
import { PopoverQuestion, PopoverHintTitle, PopoverHintText, PopoverBody } from "./Common";

export const CostStructure = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        What are the most important costs inherent in our business model?
      </PopoverQuestion>
      <PopoverQuestion>Which key resources are most expensive?</PopoverQuestion>
      <PopoverQuestion>
        Which key activities are most expensive?
      </PopoverQuestion>
      <br />
      <PopoverHintTitle>IS YOUR BUSINESS MORE</PopoverHintTitle>
      <PopoverHintText>
        Cost driven (leanest cost structure, low price value proposition,
        maximum automation, extensive outsourcing)
      </PopoverHintText>
      <PopoverHintText>
        Value driven (focused on value creation, premium value proposition)
      </PopoverHintText>
      <br />
      <PopoverHintTitle>SAMPLE CHARACTERISTICS</PopoverHintTitle>
      <PopoverHintText>
        Fixed costs (salaries, rents, utilities)
      </PopoverHintText>
      <PopoverHintText>Variable costs</PopoverHintText>
      <PopoverHintText>Economies of scale</PopoverHintText>
      <PopoverHintText>Economies of scope</PopoverHintText>
    </PopoverBody>
  );
};
