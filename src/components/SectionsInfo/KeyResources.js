import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from '.';
import cmsData from '../../cms';

export const KeyResources = () => {
  const {
    kr_q_one,
    kr_q_two,
    kr_q_three,
    kr_q_four,
    kr_d_title,
    d_kr_one,
    d_kr_two,
    d_kr_three,
    d_kr_four,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{kr_q_one}</PopoverQuestion>
      <PopoverQuestion>{kr_q_two}</PopoverQuestion>
      <PopoverQuestion>{kr_q_three}</PopoverQuestion>
      <PopoverQuestion>{kr_q_four}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{kr_d_title}</PopoverHintTitle>
      <PopoverHintText>{d_kr_one}</PopoverHintText>
      <PopoverHintText>{d_kr_two}</PopoverHintText>
      <PopoverHintText>{d_kr_three}</PopoverHintText>
      <PopoverHintText>{d_kr_four}</PopoverHintText>
    </PopoverBody>
  );
};
