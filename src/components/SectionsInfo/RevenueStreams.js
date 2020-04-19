import React from 'react';
import { PopoverQuestion, PopoverBody } from './Common';
import cmsData from '../../cms';

export const RevenueStreams = () => {
  const {
    rs_q_one,
    rs_q_two,
    rs_q_three,
    rs_q_four,
    rs_q_five,
    rs_table_head_first,
    rs_table_head_second,
    rs_table_head_third,
    rs_table_tr_one_td_one,
    rs_table_tr_one_td_two,
    rs_table_tr_one_td_three,
    rs_table_tr_two_td_one,
    rs_table_tr_two_td_two,
    rs_table_tr_two_td_three,
    rs_table_tr_three_td_one,
    rs_table_tr_three_td_two,
    rs_table_tr_three_td_three,
    rs_table_tr_four_td_one,
    rs_table_tr_four_td_two,
    rs_table_tr_five_td_one,
    rs_table_tr_five_td_two,
    rs_table_tr_six_td_one,
    rs_table_tr_seven_td_one,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{rs_q_one}</PopoverQuestion>
      <PopoverQuestion>{rs_q_two}</PopoverQuestion>
      <PopoverQuestion>{rs_q_three}</PopoverQuestion>
      <PopoverQuestion>{rs_q_four}</PopoverQuestion>
      <PopoverQuestion>{rs_q_five}</PopoverQuestion>
      <br />
      <table>
        <thead>
          <th>{rs_table_head_first}</th>
          <th>{rs_table_head_second}</th>
          <th>{rs_table_head_third}</th>
        </thead>
        <tbody>
          <tr>
            <td>{rs_table_tr_one_td_one}</td>
            <td>{rs_table_tr_one_td_two}</td>
            <td>{rs_table_tr_one_td_three}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_two_td_one}</td>
            <td>{rs_table_tr_two_td_two}</td>
            <td>{rs_table_tr_two_td_three}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_three_td_one}</td>
            <td>{rs_table_tr_three_td_two}</td>
            <td>{rs_table_tr_three_td_three}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_four_td_one}</td>
            <td>{rs_table_tr_four_td_two}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_five_td_one}</td>
            <td>{rs_table_tr_five_td_two}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_six_td_one}</td>
          </tr>
          <tr>
            <td>{rs_table_tr_seven_td_one}</td>
          </tr>
        </tbody>
      </table>
    </PopoverBody>
  );
};
