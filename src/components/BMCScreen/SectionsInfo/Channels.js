import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';

export const Channels = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        Through which channels do our customer segments want to be reached?
      </PopoverQuestion>
      <PopoverQuestion>How are we reaching them now?</PopoverQuestion>
      <PopoverQuestion>How are our channels integrated?</PopoverQuestion>
      <PopoverQuestion>Which ones work best?</PopoverQuestion>
      <PopoverQuestion>Which ones are most cost-efficient?</PopoverQuestion>
      <PopoverQuestion>
        How are we integrating them with customer routines?
      </PopoverQuestion>
      <br />
      <PopoverHintTitle>CHANNEL PHASES</PopoverHintTitle>
      <PopoverHintTitle isItalic>1. Awareness</PopoverHintTitle>
      <PopoverHintText>
        How do we raise awareness about our company's products and services?
      </PopoverHintText>
      <PopoverHintTitle isItalic>2. Evaluation</PopoverHintTitle>
      <PopoverHintText>
        How do we help customers evaluate our organization's value proposition?
      </PopoverHintText>
      <PopoverHintTitle isItalic>3. Purchase</PopoverHintTitle>
      <PopoverHintText>
        How do we allow customers to purchase specific products and services?
      </PopoverHintText>
      <PopoverHintTitle isItalic>4. Delivery</PopoverHintTitle>
      <PopoverHintText>
        How do we deliver a value proposition to customers?
      </PopoverHintText>
      <PopoverHintTitle isItalic>5. After sales</PopoverHintTitle>
      <PopoverHintText>
        How do we provide post-purchase customer support?
      </PopoverHintText>
    </PopoverBody>
  );
};
