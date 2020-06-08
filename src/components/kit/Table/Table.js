import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled, { css } from 'styled-components';
import { Card, Col, Pagination, Row, Select, Text, TextInput } from "../index";
import { colors } from "../../../styleSheet";
import { getQueryParam, setNewQueryParams } from "../../../utils";
import { withRouter } from 'react-router-dom';
import { i18n } from "../../../localization";

const StyledReactTable = styled(ReactTable)`
  border: none!important;
  background-color: ${colors.white};
  
  .rt-thead.-header {
    box-shadow: none!important;
    border-bottom: 1px solid ${colors.border};
    background-color: ${props => colors[props.grayHeader ? 'gray' : 'white']};
    color: ${props => colors[props.grayHeader ? 'white' : 'black']};
    text-align: center;
    font-weight: bold;
  }
  
  .rt-tr {
    overflow: hidden!important;
  }
 
  .rt-th {
    padding: 20px!important;
    border-right: none!important;
    border-left: none!important;
  }
  
  .rt-td {
    border-right: none!important;
    border-left: none!important;
    justify-content: center;
    align-items: center;
    display: flex;
    min-height: 55px;
  }
  
  .rt-tr-group {
    border-bottom: ${props => props.evenOdd ? `1px solid ${colors.border}` : 'none'}!important;
  }
  
  ${props => props.evenOdd ? css`
    .-odd {
      background-color: ${colors.white}!important;
    }
  
    .-even {
      background-color: ${colors.whiteBackground} !important;
    }
  ` : null}
`;

const CardBorder = styled(Card)`
  border-radius: ${props => props.isInvoice ? '15px 15px 0 0' : '15px'};
  box-shadow: ${props => props.isInvoice ? 'unset' : colors.boxShadow};

  &:hover {
   box-shadow: ${props => props.isInvoice ? 'unset' : colors.boxShadowHover}
 }
`;

type Props = {
  data: Array,
  columns: Array,
  showPagination?: Boolean,
  onPaginationChange: Function,
  onPageSizeChange: Function,
  grayHeader?: Boolean,
  evenOdd?: Boolean,
  defaultPageSize?: Number,
  total: Number,
  loading: boolean,
  searchable: Boolean,
  changePageSize: Boolean,
  isInvoice?: Boolean,
  minRows?: Number,
  customClassName: String,
  filterAble?: Boolean,
  defaultFilterMethod?: Function,
  onFetchData?: Function
};

class Table extends Component<Props> {

  static defaultProps = {
    showPagination: true,
    onPaginationChange: () => {
    },
    onPageSizeChange: () => {
    },
    grayHeader: true,
    evenOdd: true,
    defaultPageSize: 10,
    searchable: true,
    changePageSize: true,
    isInvoice: false,
    minRows: 1,
    customClassName: '',
    filterAble: false,
    defaultFilterMethod: () => {
    },
    onFetchData: () => {
    }
  };

  handleChange = selected => {
    const { history, onPageSizeChange } = this.props;
    history.push(`${history.location.pathname}?${setNewQueryParams({ pageSize: selected, page: 1 })}`);
    onPageSizeChange();
  };

  render() {
    const {
      data,
      columns,
      showPagination,
      grayHeader,
      evenOdd,
      total,
      loading,
      searchable,
      changePageSize,
      isInvoice,
      onPaginationChange,
      minRows,
      customClassName,
      filterAble,
      defaultFilterMethod,
      onFetchData,
      ...restProps
    } = this.props;
    const defaultPageSize = getQueryParam('pageSize') || 10;
    const page = Number(getQueryParam('page')) || 1;
    const to = (page * defaultPageSize) > total ? total : page * defaultPageSize;
    const from = (page * defaultPageSize) - defaultPageSize + 1;

    const selectPaginationData = [{ title: 5, value: 5 }, { title: 10, value: 10 }, { title: 15, value: 15 },
      { title: 20, value: 20 }, { title: 50, value: 50 }, { title: 100, value: 100 }];

    return (
      <div>
        <Row className="py-2">
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            {searchable ? <TextInput placeholder="form.search" showTitle={false}/> : null}
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}/>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="d-flex align-items-center justify-content-end">
            {
              changePageSize ?
                <>
                  <Text className="px-1">table.pageSize</Text>
                  <div className="w-50">
                    <Select
                      data={selectPaginationData}
                      titleSelector="title"
                      valueSelector="value"
                      onChange={this.handleChange}
                      placeholder={defaultPageSize}
                      labelClassName="m-0"
                      showTitle={false}
                    />
                  </div>
                </> : null
            }
          </Col>
        </Row>
        <CardBorder isInvoice={isInvoice} className="overflow-hidden">
          <StyledReactTable
            //react table props
            manual
            data={data}
            columns={columns}
            showPagination={false}
            className={`${evenOdd ? '-striped' : null} ${customClassName}`}
            pages={Math.ceil(total / defaultPageSize)}
            defaultPageSize={defaultPageSize}
            pageSize={defaultPageSize}
            noDataText={i18n.t('table.noDataText')}
            loading={loading}
            loadingText={i18n.t('table.loadingText')}
            //custom props
            grayHeader={grayHeader}
            evenOdd={evenOdd}
            minRows={minRows}
            filterable={filterAble}
            defaultFilterMethod={defaultFilterMethod}
            onFetchData={onFetchData}
            style={{
              height: "465px"
            }}
            {...restProps}
          />
        </CardBorder>
        {
          showPagination && total && defaultPageSize ?
            <div className="text-center my-5">
              <div className="my-3">
                <Text className="px-1" color="lightGray">table.view</Text>
                <Text className="px-1" color="lightGray">{from}</Text>
                <Text className="px-1" color="lightGray">table.to</Text>
                <Text className="px-1" color="lightGray">{to}</Text>
                <Text className="px-1" color="lightGray">table.from</Text>
                <Text className="px-1" color="lightGray">{total}</Text>
                <Text className="px-1" color="lightGray">table.item</Text>
              </div>
              <Pagination total={total} perPage={defaultPageSize} onChange={onPaginationChange}/>
            </div> :
            null
        }
      </div>
    );
  }
}

export default withRouter(Table);
