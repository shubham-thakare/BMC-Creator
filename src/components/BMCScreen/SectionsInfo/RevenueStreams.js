import React from "react";
import { PopoverQuestion, PopoverBody } from "./Common";

export const RevenueStreams = () => {
  return (
    <PopoverBody>
      <PopoverQuestion>
        For what value are our customers really willing to pay?
      </PopoverQuestion>
      <PopoverQuestion>For what do they currently pay?</PopoverQuestion>
      <PopoverQuestion>How are they currently paying?</PopoverQuestion>
      <PopoverQuestion>How would they prefer to pay?</PopoverQuestion>
      <PopoverQuestion>
        How much does each revenue stream contribute to overall revenues?
      </PopoverQuestion>
      <br />
      <table>
        <thead>
          <th>Types</th>
          <th>Fixed Pricing</th>
          <th>Dynamic Pricing</th>
        </thead>
        <tbody>
          <tr>
            <td>Asset sale</td>
            <td>List price</td>
            <td>Negotiation (bargaining)</td>
          </tr>
          <tr>
            <td>Usage fee</td>
            <td>Product feature dependent</td>
            <td>Yield management</td>
          </tr>
          <tr>
            <td>Subscription fees</td>
            <td>Customer segment</td>
            <td>Real-time-market</td>
          </tr>
          <tr>
            <td>Lending/Renting/Leasing</td>
            <td>dependent</td>
          </tr>
          <tr>
            <td>Licensing</td>
            <td>Volume dependent </td>
          </tr>
          <tr>
            <td>Brokerage fees</td>
          </tr>
          <tr>
            <td>Advertising</td>
          </tr>
        </tbody>
      </table>
    </PopoverBody>
  );
};
