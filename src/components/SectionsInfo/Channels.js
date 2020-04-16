import React from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';
import cmsData from '../../cms';

export const Channels = () => {
  const {
    c_q_one,
    c_q_two,
    c_q_three,
    c_q_four,
    c_q_five,
    c_q_six,
    l_channel_phases,
    l_cp_one,
    d_cp_one,
    l_cp_two,
    d_cp_two,
    l_cp_three,
    d_cp_three,
    l_cp_four,
    d_cp_four,
    l_cp_five,
    d_cp_five,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{c_q_one}</PopoverQuestion>
      <PopoverQuestion>{c_q_two}</PopoverQuestion>
      <PopoverQuestion>{c_q_three}</PopoverQuestion>
      <PopoverQuestion>{c_q_four}</PopoverQuestion>
      <PopoverQuestion>{c_q_five}</PopoverQuestion>
      <PopoverQuestion>{c_q_six}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{l_channel_phases}</PopoverHintTitle>
      <PopoverHintTitle>{l_cp_one}</PopoverHintTitle>
      <PopoverHintText>{d_cp_one}</PopoverHintText>
      <PopoverHintTitle>{l_cp_two}</PopoverHintTitle>
      <PopoverHintText>{d_cp_two}</PopoverHintText>
      <PopoverHintTitle>{l_cp_three}</PopoverHintTitle>
      <PopoverHintText>{d_cp_three}</PopoverHintText>
      <PopoverHintTitle>{l_cp_four}</PopoverHintTitle>
      <PopoverHintText>{d_cp_four}</PopoverHintText>
      <PopoverHintTitle>{l_cp_five}</PopoverHintTitle>
      <PopoverHintText>{d_cp_five}</PopoverHintText>
    </PopoverBody>
  );
};
