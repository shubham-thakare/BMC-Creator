import React, { useContext } from 'react';
import {
  PopoverQuestion,
  PopoverHintTitle,
  PopoverHintText,
  PopoverBody,
} from './Common';
import { AppContext } from '../../../utils/Context';

export const KeyPartners = () => {
  const { cmsData } = useContext(AppContext);

  const {
    kp_q_one,
    kp_q_two,
    kp_q_three,
    kp_q_four,
    d_kp_one,
    d_kp_two,
    d_kp_three,
    d_kp_four,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{kp_q_one}</PopoverQuestion>
      <PopoverQuestion>{kp_q_two}</PopoverQuestion>
      <PopoverQuestion>{kp_q_three}</PopoverQuestion>
      <PopoverQuestion>{kp_q_four}</PopoverQuestion>
      <br />
      <PopoverHintTitle>{d_kp_one}</PopoverHintTitle>
      <PopoverHintText>{d_kp_two}</PopoverHintText>
      <PopoverHintText>{d_kp_three}</PopoverHintText>
      <PopoverHintText>{d_kp_four}</PopoverHintText>
    </PopoverBody>
  );
};
