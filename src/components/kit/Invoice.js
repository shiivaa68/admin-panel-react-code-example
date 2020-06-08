// @flow
import React from 'react';
import { Text, Table, Card, Container, Col, Row, HR, Counter, Icon } from './';
import styled from 'styled-components';
import { getQueryParam, tableRowIndex, translatePrice } from '../../utils';
import { productImage } from '../../config';

type Props = {
  data: Array,
  errors?: Array,
  language: Object,
  isShop?: Boolean,
  add: Function,
  remove: Function
};

const ImageWrapper = styled(Card)`
  width: 82px;
  min-width: 82px;
  min-height: 82px;
  height: 82px;
`;

const checkDataStock = (allData = [], errors = []) => {
  return allData.reduce((acc, current) => {
    const foundItem = errors.find(item => Number(item.id) === Number(current.id));
    if (foundItem) {
      acc.push({
        ...current,
        error: foundItem
      });
      return acc;
    }
    acc.push(current);
    return acc;
  }, [])
};

Invoice.defaultProps = {
  isShop: false
};

export default function Invoice(props: Props) {
  const { data, language, errors = [] } = props;
  const tableData = data;
  const pageSize = Number(getQueryParam('pageSize')) || 10;
  const page = getQueryParam('page') || 1;

  const currentData = checkDataStock(data.invoices, errors);

  const invoiceColumns = [
    {
      minWidth: 70,
      Header: <Text color="white" bold>invoice.row</Text>,
      Cell: ({ index }) => <Text>{tableRowIndex(index, pageSize, page)}</Text>
    },
    {
      minWidth: 500,
      Header: <Text color="white" bold>invoice.productName</Text>,
      Cell: (row) => (
        <div className="d-flex p-3 justify-content-start w-100">
          <ImageWrapper
            type="white"
            hasBorder
            hasShadow={false}
            className="d-flex align-items-center justify-content-center overflow-hidden px-2"
          >
            <img
              src={productImage(row.original.img || row.original.productImage)}
              alt={row.original.name}
              className="img-fluid h-100"
            />
          </ImageWrapper>
          <div className="px-2 d-flex justify-content-center flex-column">
            <Text bold type="p" size="sm">{row.original.name || row.original.productName}</Text>
            <div>
              <Text color="lightGray" className="px-1">invoice.pointSale</Text>
              <Text color="lightGray">{row.original.bv}</Text>
            </div>
          </div>
        </div>
      )
    },
    {
      minWidth: 270,
      Header: <Text color="white" bold>invoice.unitPrice</Text>,
      accessor: 'price',
      Cell: (row) => {
        return (
          <div className="d-flex align-items-center flex-column">
            {
              row.original.error &&
              row.original.error.hasOwnProperty('id') &&
              row.original.count > row.original.error.inventory ? (
                <>
                  <Card type="failure" hasShadow={false}>
                    <Text
                      color="white"
                      className="px-2 my-1"
                    >
                      {row.original.error.inventory === 0 ? 'invoice.notAvailable' : 'invoice.notEnough'}
                    </Text>
                  </Card>
                  <Card type="secondaryHover" className="my-2">
                    <Text
                      color="white"
                      className="px-2 my-1"
                    >
                      invoice.inventory
                    </Text>
                    <Text
                      color="white"
                      className="px-2 my-1"
                    >
                      {row.original.error.inventory}
                    </Text>
                  </Card>
                </>
              ) : null}
            <div>
              <Text>{`${Number(row.original.price || row.original.productPrice).toLocaleString()} `}</Text>
              <Text>invoice.rial</Text>
            </div>
          </div>
        );
      }
    },
    {
      minWidth: 200,
      Header: <Text color="white" bold>invoice.totalUnitPrice</Text>,
      Cell: (row) => (
        <div>
          <Text>{`${Number((row.original.count) * Number(row.original.price || row.original.productPrice)).toLocaleString()} `}</Text>
          <Text>invoice.rial</Text>
        </div>
      )
    },
    props.isShop ?
      {
        minWidth: 110,
        Header: <Text color="white" bold>invoice.countProduct</Text>,
        accessor: 'count',
        Cell: (row) => (
          <>
            <Counter
              add={() => props.add(row.original)}
              remove={() => props.remove(row.original, 1)}
              count={row.original.count}
            />
            <Icon
              name="trash"
              color="failure"
              size={18}
              className="px-2 pointer"
              onClick={() => props.remove(row.original, row.original.count)}
            />
          </>
          )
      } :
      {
        minWidth: 80,
        Header: <Text color="white" bold>invoice.countProduct</Text>,
        accessor: 'count',
        Cell: (row) => <Text>{row.original.count}</Text>
      }
  ];

  return (
    <div className="my-lg-4">
      <Table
        data={currentData}
        total={tableData.count}
        columns={invoiceColumns}
        evenOdd
        searchable={false}
        changePageSize={false}
        showPagination={false}
        isInvoice
      />
      <Card>
        <Container fluid className="mt-4">
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="mb-4">
                <Text>invoice.totalPrice</Text>
                <Text
                  className="px-1"
                  color="primary"
                >
                  {translatePrice(tableData.price, 'ریال', language.detector)}
                </Text>
              </div>
              <div className="mb-4">
                <Text>invoice.discount</Text>
                <Text>:</Text>
                <Text
                  className="px-1"
                  color="primary"
                >
                  {translatePrice(tableData.discount, 'ریال', language.detector)}
                </Text>
              </div>
              <div className="mb-4">
                <Text size="sm">%</Text>
                <Text size="sm">0</Text>
                <Text>invoice.taxs</Text>
                <Text>:</Text>
                <Text size="sm" color="primary"> 0 </Text>
                <Text size="sm" color="primary">invoice.rial</Text>
              </div>
              <div className="mb-4">
                <Text>invoice.totalWithTaxs</Text>
                <Text
                  className="px-1"
                  color="primary"
                >
                  {translatePrice(tableData.price, 'ریال', language.detector)}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="pb-2 mt-0 d-flex align-items-center justify-content-between">
                <Text size="sm">invoice.invoiceSum</Text>
                <div>
                  <Text className="px-1" size="sm">{tableData.price.toLocaleString()}</Text>
                  <Text size="sm">invoice.rial</Text>
                </div>
              </div>
              <HR className="my-0"/>
              <div className="py-2 d-flex align-items-center justify-content-between">
                <span className="d-flex">
                  <Text className="pt-1" size="sm">invoice.discount</Text>
                  <Card type="failure" hasShadow={false} className="mx-2 py-1 px-2">
                    <Text color="white" size="sm">invoice.commissionRetail</Text>
                    <Text className="px-1" color="white" size="sm">{tableData.discount.toLocaleString()}</Text>
                    <Text color="white" size="sm">invoice.rial</Text>
                  </Card>
                </span>
                <div>
                  <Text className="px-1" size="sm">{tableData.discount.toLocaleString()}</Text>
                  <Text size="sm">invoice.rial</Text>
                </div>
              </div>
              <HR className="my-0"/>
              <div className="py-3 d-flex align-items-center justify-content-between">
                <Text size="sm">invoice.taxs</Text>
                <Text size="sm">0</Text>
              </div>
              {
                tableData.totalPrice ?(
                  <>
                  <HR className="my-0"/>
                  <div className="py-3 d-flex align-items-center justify-content-between">
                    <Text size="sm">invoice.payable</Text>
                    <div>
                      <Text size="sm">{`${tableData.totalPrice.toLocaleString()} `}</Text>
                      <Text size="sm">invoice.rial</Text>
                    </div>
                  </div>
                  </>
                ) : <></>
              }
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  )
}
