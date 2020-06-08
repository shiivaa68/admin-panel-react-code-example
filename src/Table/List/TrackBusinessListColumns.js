import React from 'react';
import {
  Text,
  Avatar,
  Dropdown,
  Card,
  Ul,
  TableDropDownItem,
  EmptyText,
  Status,
} from '../../components/kit';
import { tableRowIndex } from '../../utils';

export const TrackBusinessListColumns = ({ pageSize, page, modals }) => {
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
      Cell: row =>
        row.original.user ? (
          <Text>{row.original.user.name_first}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 120,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.family
        </Text>
      ),
      accessor: 'name_last',
      Cell: row =>
        row.original.user ? (
          <Text>{row.original.user.name_last}</Text>
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
      accessor: 'mobile',
      Cell: row =>
        row.original.user ? (
          <Text>{row.original.user.mobile}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.userStatusBusiness
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['gray', 'green']}
          text={`panel.tableColumn.statusUserBusiness_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.countBusiness
        </Text>
      ),
      accessor: 'businesses',
      Cell: row =>
        row.original.user ? (
          <Text>{row.original.user.businesses.length}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.nationalCode
        </Text>
      ),
      accessor: 'nationalCode',
      Cell: row =>
        row.original.user ? (
          <Text>{row.original.user.nationalCode}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.name
        </Text>
      ),
      accessor: 'name',
      Cell: row =>
        row.original ? <Text>{row.original.name}</Text> : <EmptyText />,
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.description
        </Text>
      ),
      accessor: 'description',
      Cell: row =>
        row.original ? <Text>{row.original.description}</Text> : <EmptyText />,
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.isProv
        </Text>
      ),
      accessor: 'isProv',
      Cell: row => {
        return <Text>{`panel.tableColumn.isProv_${row.original.isProv}`}</Text>;
      },
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.statusbusiness
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['red', 'green']}
          text={`panel.tableColumn.statusbusiness_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.address
        </Text>
      ),
      accessor: 'address',
      Cell: row =>
        row.original ? <Text>{row.original.address}</Text> : <EmptyText />,
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.dialogAvailable
        </Text>
      ),
      accessor: 'dialogAvailable',
      Cell: row => {
        return (
          <Text>{`panel.tableColumn.dialogAvailable_${row.original.dialogAvailable}`}</Text>
        );
      },
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.postsCount
        </Text>
      ),
      accessor: 'postsCount',
      Cell: row =>
        row.original ? <Text>{row.original.postsCount}</Text> : <EmptyText />,
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.socialConnectionsCount
        </Text>
      ),
      accessor: 'socialConnectionsCount',
      Cell: row =>
        row.original ? (
          <Text>{row.original.socialConnectionsCount}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.avatar
        </Text>
      ),
      accessor: 'avatar',
      Cell: row => (
        <Avatar
          rounded
          hash={row.original.avatar && row.original.avatar.hash}
          alt="test"
        />
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
        <Dropdown iconName="setting" title="" titleColor="" iconColor="failure">
          <Card hasShadow={false} type="white" className="p-1">
            <Ul className="m-0" listStylePosition="none">
              <TableDropDownItem
                onClick={() => modals._CreatePostModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="secondary">
                  panel.tableColumn.controller.PostBusinessAdmin
                </Text>
              </TableDropDownItem>
            </Ul>
          </Card>
        </Dropdown>
      ),
    },
  ];
};
