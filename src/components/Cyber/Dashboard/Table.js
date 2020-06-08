// @flow
import React, { PureComponent } from 'react';
import { Icon, Table, Text, Loading, Card } from '../../kit';
import { getQueryParam } from "../../../utils";
import styled from "styled-components";
import moment from "moment-jalali";

const DetailNews = styled.div`
  width: 350px;
`;

type Props = {
  language: Object,
};
export default class CyberNewsTable extends PureComponent<Props> {

  render() {
    const { language, cyberNews } = this.props;
    const tableColumns = [
      {
        minWidth: 500,
        Header: <Text bold>cyber.dashboard.table.newsHeadline</Text>,
        Cell: row => (
          <DetailNews className="d-flex p-3 justify-content-start w-100 text-hidden">
            <Card
              hasShadow={false}
              type="grayBackground"
              className="d-flex align-items-center justify-content-center p-2"
            >
              <Icon name="text" color="white" size={32}/>
            </Card>
            <div className="px-2 d-flex justify-content-center flex-column text-hidden">
              <Text bold type="p" size="sm">{row.original.subject}</Text>
              <Text className="text-hidden d-inline-block w-90" color="lightGray">{row.original.text}</Text>
            </div>
          </DetailNews>
        )
      },
      {
        minWidth: 150,
        Header: <Text bold>cyber.dashboard.table.releaseDate</Text>,
        accessor: 'date',
        Cell: ({ row }) => moment(row.date).format('jYYYY/jMM/jDD')
      },
      {
        minWidth: 100,
        Header: <Text bold>cyber.dashboard.table.priority</Text>,
        accessor: 'priority',
        Cell: ({ row }) => row.priority === 1 ? (
          <Card type="failure" hasShadow={false} className="mx-2 py-1 px-3">
            <Text color="white">cyber.dashboard.table.priorityStatus</Text>
          </Card>
        ) : '-'
      },
      {
        minWidth: 150,
        Header: <Text bold>cyber.dashboard.table.status</Text>,
        accessor: 'read',
        Cell: ({ row }) => (
          <Card type="primary" hasShadow={false} className="mx-2 py-1 px-3">
            <Text color="white">
              {row.read === 1 ? 'cyber.dashboard.table.statusRead' : 'cyber.dashboard.table.statusUnRead'}
            </Text>
          </Card>
        )
      }
    ];
    const tableDefaultPageSize = getQueryParam('pageSize') || 10;

    return (
      <Loading loading={cyberNews.loading}>
        {
          cyberNews.data.news && cyberNews.data.news.length ?
            <div>
              <Table
                searchable={false}
                changePageSize={false}
                data={cyberNews.data.news}
                columns={tableColumns}
                grayHeader={false}
                evenOdd={false}
                total={cyberNews.data.news.length}
                defaultPageSize={tableDefaultPageSize}
                showPagination={false}
                language={language}
                customClassName="dashboard-table"
              />
            </div> :
            null
        }
      </Loading>
    );
  }
}
