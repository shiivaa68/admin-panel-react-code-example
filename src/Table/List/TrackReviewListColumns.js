import React from 'react';
import {
  Text,
  Dropdown,
  Card,
  Ul,
  TableDropDownItem,
  EmptyText,
  DateTime,
  Status,
} from '../../components/kit';
import { tableRowIndex } from '../../utils';

export const TrackReviewListColumns = ({ pageSize, page, modals }) => {
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
          panel.tableColumn.review
        </Text>
      ),
      Cell: row =>
        row.original.text ? <Text>{row.original.text}</Text> : <EmptyText />,
    },
    {
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.reviewStatus
        </Text>
      ),
      accessor: 'status',
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['blue', 'green', 'failure', 'red']}
          text={`panel.tableColumn.reviewStatus_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.authorNameReview
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
          panel.tableColumn.bussinesNameReview
        </Text>
      ),
      Cell: row =>
        row.original.business ? (
          <Text>{row.original.business.name}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.description
        </Text>
      ),
      Cell: row =>
        row.original.business ? (
          <Text>{row.original.business.description}</Text>
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
      minWidth: 170,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.reviewRate
        </Text>
      ),
      accessor: 'rate',
      Cell: row => (
        <Text>{`panel.tableColumn.reviewRate_${row.original.rate}`}</Text>
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.businessStatusReview
        </Text>
      ),
      accessor: 'status',
      Cell: row =>
        row.original.business ? (
          <Text>{`panel.tableColumn.businessStatusReview_${row.original.business.status}`}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.address
        </Text>
      ),
      Cell: row =>
        row.original.business ? (
          <Text>{row.original.business.address}</Text>
        ) : (
          <EmptyText />
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
                onClick={() => modals._SubmitReviewModal.show(row)}
                className="py-2 text-center pointer"
              >
                <Text color="green">
                  panel.tableColumn.controller.submitReviewBusiness
                </Text>
              </TableDropDownItem>
            </Ul>
          </Card>
        </Dropdown>
      ),
    },
  ];
};
