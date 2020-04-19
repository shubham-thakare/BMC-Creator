import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from '.';
import cmsData from '../../cms';

export const CustomerRelationships = () => {
  const {
    cr_q_one,
    cr_q_two,
    cr_q_three,
    cr_q_four,
    cr_d_title,
    d_cr_one,
    d_cr_two,
    d_cr_three,
    d_cr_four,
    d_cr_five,
    d_cr_six,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{cr_q_one}</PopoverQuestion>
      <PopoverQuestion>{cr_q_two}</PopoverQuestion>
      <PopoverQuestion>{cr_q_three}</PopoverQuestion>
      <PopoverQuestion>{cr_q_four}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{cr_d_title}</PopoverHintTitle>
      <PopoverHintText>{d_cr_one}</PopoverHintText>
      <PopoverHintText>{d_cr_two}</PopoverHintText>
      <PopoverHintText>{d_cr_three}</PopoverHintText>
      <PopoverHintText>{d_cr_four}</PopoverHintText>
      <PopoverHintText>{d_cr_five}</PopoverHintText>
      <PopoverHintText>{d_cr_six}</PopoverHintText>
    </PopoverBody>
  );
};
