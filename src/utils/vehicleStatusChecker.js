export const statusColor = status => {
  let color = '';
  switch (status) {
    case 0:
      color = 'gray';
      break;
    case 1:
      color = 'pink';
      break;
    case 2:
      color = 'yellow';
      break;
    case 3:
      color = 'blue';
      break;
    case 4:
      color = 'green';
      break;
    case 5:
      color = 'brown';
      break;
    case 6:
      color = 'red';
      break;
    default:
      color = 'brown/red';
      break;
  }
  return color
};

export const statusText = status => {
  let text = '';
  switch (status) {
    case 0:
      text = 'panel.vehicle.table.status_inactive';
      break;
    case 1:
      text = 'panel.vehicle.table.status_active';
      break;
    case 2:
      text = 'panel.vehicle.table.status_chargeNeeded';
      break;
    case 3:
      text = 'panel.vehicle.table.status_inService';
      break;
    case 4:
      text = 'panel.vehicle.table.status_riding';
      break;
    case 5:
      text = 'panel.vehicle.table.status_outOfService';
      break;
    case 6:
      text = 'panel.vehicle.table.status_whereIsIt';
      break;
    default:
      text = 'panel.vehicle.table.status_robbed';
      break;
  }
  return text
};
