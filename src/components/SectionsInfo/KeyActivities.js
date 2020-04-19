import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from '.';
import cmsData from '../../cms';

export const KeyActivities = () => {
  const {
    ka_q_one,
    ka_q_two,
    ka_q_three,
    ka_q_four,
    d_ka_one,
    d_ka_two,
    d_ka_three,
    d_ka_four,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{ka_q_one}</PopoverQuestion>
      <PopoverQuestion>{ka_q_two}</PopoverQuestion>
      <PopoverQuestion>{ka_q_three}</PopoverQuestion>
      <PopoverQuestion>{ka_q_four}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{d_ka_one}</PopoverHintTitle>
      <PopoverHintText>{d_ka_two}</PopoverHintText>
      <PopoverHintText>{d_ka_three}</PopoverHintText>
      <PopoverHintText>{d_ka_four}</PopoverHintText>
    </PopoverBody>
  );
};
