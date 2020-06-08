import React from 'react';
import {
  Text,
  EmptyText,
  DateTime,
  Dropdown,
  Card,
  Ul,
  TableDropDownItem,
  Status,
  TableFilterInput,
} from '../../components/kit';
import { tableRowIndex } from '../../utils';

export const TrackUserListColumns = ({ pageSize, page, modals }) => {
  return [
    {
      minWidth: 50,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.row
        </Text>
      ),
      Cell: ({ index }) => <Text>{tableRowIndex(index, pageSize, page)}</Text>,
      filterable: false,
      sortable: false,
    },
    {
      minWidth: 120,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.name
        </Text>
      ),
      accessor: 'name_first',
    },
    {
      minWidth: 120,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.family
        </Text>
      ),
      Cell: row =>
        row.original.name_last ? (
          <Text>{row.original.name_last}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.mobile
        </Text>
      ),
      Cell: row =>
        row.original.mobile ? (
          <Text>{row.original.mobile}</Text>
        ) : (
          <EmptyText />
        ),
      filterable: true,
      accessor: 'mb',
      Filter: props => <TableFilterInput {...props} param="mb" />,
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.date
        </Text>
      ),
      accessor: 'createdAt',
      Cell: row =>
        row.original.createdAt ? (
          <DateTime datetime={row.original.createdAt} />
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.statusUser
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['gray', 'green', 'red']}
          text={`panel.tableColumn.statusUser_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.isActive
        </Text>
      ),
      accessor: 'isActivated',
      Cell: row => (
        <Text>{`panel.tableColumn.isActive_${row.original.isActivated}`}</Text>
      ),
    },
    {
      minWidth: 100,
      Header: <Text color="white">panel.tableColumn.countBusiness</Text>,
      accessor: 'businesses',
      Cell: row => (
        <Text>
          {row.original.businesses ? row.original.businesses.length : 0}
        </Text>
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.controller.title
        </Text>
      ),
      Cell: row => (
        <Dropdown
          iconName="setting"
          title=""
          titleColor=""
          iconColor="failure0"
        >
          <Card hasShadow={false} type="white" className="p-1">
            <Ul className="m-0" listStylePosition="none">
              <TableDropDownItem
                onClick={() => modals._CountBusinessModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="secondary">
                  panel.tableColumn.controller.showBusinesses
                </Text>
              </TableDropDownItem>
            </Ul>
          </Card>
        </Dropdown>
      ),
    },
  ];
};
