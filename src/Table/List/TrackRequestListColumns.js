import React from 'react';
import {
  Text,
  Avatar,
  Dropdown,
  Card,
  Ul,
  TableDropDownItem,
  EmptyText,
  DateTime,
  TableFilterSelect,
  Status,
} from '../../components/kit';
import { tableRowIndex } from '../../utils';

export const TrackRequestListColumns = ({ pageSize, page, modals }) => {
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
          panel.tableColumn.requesterName
        </Text>
      ),
      accessor: 'requester.name',
    },
    {
      minWidth: 120,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.serviceName
        </Text>
      ),
      accessor: 'requester',
      Cell: row =>
        row.original.requester.service ? (
          <Text>{row.original.requester.service.name}</Text>
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
      accessor: 'description',
      Cell: row =>
        row.original.description ? (
          <Text>{row.original.description}</Text>
        ) : (
          <EmptyText />
        ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.region
        </Text>
      ),
      accessor: 'region',
      Cell: row =>
        row.original.region ? (
          <Text>{row.original.region.name}</Text>
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
          panel.tableColumn.requestStatus
        </Text>
      ),
      accessor: 'st',
      filterable: true,
      Filter: props => (
        <TableFilterSelect
          data={[
            { masalan: 'masalan', value: 0 },
            { masalan: 'masalan2', value: 1 },
          ]}
          titleSelector="masalan"
          valueSelector="value"
          param="st"
          {...props}
        />
      ),
      Cell: row => (
        <Status
          status={row.original.status}
          colors={['orange', 'green', 'faliure', 'blue']}
          text={`panel.tableColumn.status_${row.original.status}`}
        />
      ),
    },
    {
      minWidth: 150,
      Header: (
        <Text color="white" bold>
          panel.tableColumn.responseCount
        </Text>
      ),
      accessor: 'responses',
      Cell: row =>
        row.original.responses ? (
          <Text>{row.original.responses.length}</Text>
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
          hash={
            row.original.requester.avatar && row.original.requester.avatar.hash
          }
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
      accessor: 'responses',
      Cell: row => {
        let hasMessages = false;
        row.original.responses.forEach(response => {
          if (response.messages) {
            hasMessages = true;
          }
        });
        return (
          <Dropdown
            iconName="setting"
            title=""
            titleColor=""
            iconColor="failure"
          >
            <Card hasShadow={false} type="white" className="p-1">
              <Ul className="m-0" listStylePosition="none">
                <TableDropDownItem
                  onClick={() => modals._TrackBlockModal.show(row)}
                  className="py-2 text-center pointer"
                >
                  <Text color="red">panel.tableColumn.controller.block</Text>
                </TableDropDownItem>
                <TableDropDownItem
                  onClick={() => {
                    modals._ResponseStatusModal.show(row);
                  }}
                  className="py-2 text-center pointer"
                >
                  <Text color="green">
                    panel.tableColumn.controller.requestStatus
                  </Text>
                </TableDropDownItem>
                <TableDropDownItem
                  onClick={() => {
                    modals._RejectStatusModal.show(row);
                  }}
                  className="py-2 text-center pointer"
                >
                  <Text color="red">
                    panel.tableColumn.controller.rejectStatus
                  </Text>
                </TableDropDownItem>
                {hasMessages ? (
                  <TableDropDownItem
                    onClick={() => {
                      modals._ShowResponsersModal.show(row);
                    }}
                    className="py-2 text-center pointer"
                  >
                    <Text color="secondary">
                      panel.tableColumn.controller.showMessageResponse
                    </Text>
                  </TableDropDownItem>
                ) : null}
              </Ul>
            </Card>
          </Dropdown>
        );
      },
    },
  ];
};
