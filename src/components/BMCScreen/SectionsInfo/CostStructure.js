import React, { useContext } from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';
import { AppContext } from '../../../utils/Context';

export const CostStructure = () => {
  const { cmsData } = useContext(AppContext);

  const {
    cs_q_one,
    cs_q_two,
    cs_q_three,
    cs_d_title_one,
    d_cs_one,
    d_cs_two,
    cs_d_title_two,
    d_cs_three,
    d_cs_four,
    d_cs_five,
    d_cs_six,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{cs_q_one}</PopoverQuestion>
      <PopoverQuestion>{cs_q_two}</PopoverQuestion>
      <PopoverQuestion>{cs_q_three}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{cs_d_title_one}</PopoverHintTitle>
      <PopoverHintText>{d_cs_one}</PopoverHintText>
      <PopoverHintText>{d_cs_two}</PopoverHintText>
      <br />
      <PopoverHintTitle>{cs_d_title_two}</PopoverHintTitle>
      <PopoverHintText>{d_cs_three}</PopoverHintText>
      <PopoverHintText>{d_cs_four}</PopoverHintText>
      <PopoverHintText>{d_cs_five}</PopoverHintText>
      <PopoverHintText>{d_cs_six}</PopoverHintText>
    </PopoverBody>
  );
};
