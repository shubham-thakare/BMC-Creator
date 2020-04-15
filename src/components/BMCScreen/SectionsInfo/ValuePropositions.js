import React, { useContext } from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';
import { AppContext } from '../../../utils/Context';

export const ValuePropositions = () => {
  const { cmsData } = useContext(AppContext);

  const {
    vp_q_one,
    vp_q_two,
    vp_q_three,
    vp_q_four,
    vp_d_title,
    d_vp_one,
    d_vp_two,
    d_vp_three,
    d_vp_four,
    d_vp_five,
    d_vp_six,
    d_vp_seven,
    d_vp_eight,
    d_vp_nine,
    d_vp_ten,
    d_vp_eleven,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{vp_q_one}</PopoverQuestion>
      <PopoverQuestion>{vp_q_two}</PopoverQuestion>
      <PopoverQuestion>{vp_q_three}</PopoverQuestion>
      <PopoverQuestion>{vp_q_four}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{vp_d_title}</PopoverHintTitle>
      <PopoverHintText>{d_vp_one}</PopoverHintText>
      <PopoverHintText>{d_vp_two}</PopoverHintText>
      <PopoverHintText>{d_vp_three}</PopoverHintText>
      <PopoverHintText>{d_vp_four}</PopoverHintText>
      <PopoverHintText>{d_vp_five}</PopoverHintText>
      <PopoverHintText>{d_vp_six}</PopoverHintText>
      <PopoverHintText>{d_vp_seven}</PopoverHintText>
      <PopoverHintText>{d_vp_eight}</PopoverHintText>
      <PopoverHintText>{d_vp_nine}</PopoverHintText>
      <PopoverHintText>{d_vp_ten}</PopoverHintText>
      <PopoverHintText>{d_vp_eleven}</PopoverHintText>
    </PopoverBody>
  );
};
