import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';

export const KeyPartners = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>Who are our key partners?</PopoverQuestion>
      <PopoverQuestion>Who are our key suppliers?</PopoverQuestion>
      <PopoverQuestion>
        Which key resources are we acquairing from partners?
      </PopoverQuestion>
      <PopoverQuestion>
        Which key activities do partners perform?
      </PopoverQuestion>
      <br />
      <PopoverHintTitle>hints for partnerships</PopoverHintTitle>
      <PopoverHintText>Optimization and economy</PopoverHintText>
      <PopoverHintText>Reduction of risk and uncertainity</PopoverHintText>
      <PopoverHintText>
        Acquisition of particular resources and activities
      </PopoverHintText>
    </PopoverBody>
  );
};
