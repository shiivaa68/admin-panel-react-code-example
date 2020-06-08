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

export const TrackPostListColumns = ({ pageSize, page, modals }) => {
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
          panel.tableColumn.post
        </Text>
      ),
      Cell: row =>
        row.original.text ? <Text>{row.original.text}</Text> : <EmptyText />,
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.mobile
        </Text>
      ),
      Cell: row =>
        row.original.business.user.mobile ? (
          <Text>{row.original.business.user.mobile}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.statusPost
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['blue', 'green', 'failure', 'gray', 'red']}
          text={`panel.tableColumn.statusPost_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.ignorePose
        </Text>
      ),
      Cell: row =>
        row.original.reviewDescription ? (
          <Text>{row.original.reviewDescription}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.bussinesName
        </Text>
      ),
      Cell: row =>
        row.original.business.name ? (
          <Text>{row.original.business.name}</Text>
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
        row.original.postAt ? (
          <DateTime datetime={row.original.postAt} />
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
          panel.tableColumn.lkCount
        </Text>
      ),
      Cell: row =>
        row.original.lkCount ? (
          <Text>{row.original.lkCount}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.cmCount
        </Text>
      ),
      Cell: row =>
        row.original.cmCount ? (
          <Text>{row.original.cmCount}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.controller.titlepost
        </Text>
      ),
      Cell: row => (
        <Dropdown iconName="setting" title="" titleColor="" iconColor="failure">
          <Card hasShadow={false} type="white" className="p-1">
            <Ul className="m-0" listStylePosition="none">
              <TableDropDownItem
                onClick={() => modals._SubmitPostModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="blue">
                  panel.tableColumn.controller.submitPost
                </Text>
              </TableDropDownItem>
              <TableDropDownItem
                onClick={() => modals._UploadImgPostModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="primary">
                  panel.tableColumn.controller.uploadimgpost
                </Text>
              </TableDropDownItem>
              <TableDropDownItem
                onClick={() => modals._SubmitCreatePostModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="green">
                  panel.tableColumn.controller.submitcreatepost
                </Text>
              </TableDropDownItem>
            </Ul>
          </Card>
        </Dropdown>
      ),
    },
  ];
};
