import React from 'react';
import {
  Text,
  Dropdown,
  Card,
  Ul,
  TableDropDownItem,
  EmptyText,
  DateTime,
  Avatar,
  Status,
} from '../../components/kit';
import { tableRowIndex } from '../../utils';

export const TrackCommentListColumns = ({ pageSize, page, modals }) => {
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
          panel.tableColumn.comment
        </Text>
      ),
      Cell: row =>
        row.original.text ? <Text>{row.original.text}</Text> : <EmptyText />,
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.commentStatus
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['blue', 'green', 'failure', 'red']}
          text={`panel.tableColumn.commentStatus_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.commentNameBusiness
        </Text>
      ),
      Cell: row =>
        row.original.post.business ? (
          <Text>{row.original.post.business.name}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.commentNameAuther
        </Text>
      ),
      Cell: row =>
        row.original.author.name ? (
          <Text>{row.original.author.name}</Text>
        ) : (
          <EmptyText />
        ),
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
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.avatar
        </Text>
      ),
      accessor: 'requester',
      Cell: row => (
        <Avatar
          rounded
          hash={row.original.author.avatar && row.original.author.avatar.hash}
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
                onClick={() => modals._SubmitCommentModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="green">
                  panel.tableColumn.controller.titleComment
                </Text>
              </TableDropDownItem>
            </Ul>
          </Card>
        </Dropdown>
      ),
    },
  ];
};
