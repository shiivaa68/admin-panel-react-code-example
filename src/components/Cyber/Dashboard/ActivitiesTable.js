// @flow

import React from 'react';
import { HR } from '../../kit';
import ActiveTableItem from "./ActiveTableItem";

type Props = {
  thisMonth: Object,
  lastMonth: Object
};

export default function ActivitiesTable({ thisMonth, lastMonth }: Props) {
  return (
    <div className="p-1">
      <ActiveTableItem
        title="cyber.dashboard.report.groupSale"
        thisMonth={thisMonth.groupSale}
        lastMonth={lastMonth.groupSale}
      />
      <HR/>
      <ActiveTableItem
        title="cyber.dashboard.report.groupBuy"
        thisMonth={thisMonth.groupSaleDiscount}
        lastMonth={lastMonth.groupSaleDiscount}
      />
      <HR/>
      <ActiveTableItem
        title="cyber.dashboard.report.activeMarketers"
        thisMonth={thisMonth.userCompress}
        lastMonth={lastMonth.userCompress}
      />
      <HR/>
      <ActiveTableItem
        title="cyber.dashboard.report.newMarketers"
        thisMonth={thisMonth.newFirst}
        lastMonth={lastMonth.newFirst}
      />
      <HR/>
      <ActiveTableItem
        title="cyber.dashboard.report.newMarketersSale"
        thisMonth={thisMonth.firstSale}
        lastMonth={lastMonth.firstSale}
      />
    </div>
  );
}
