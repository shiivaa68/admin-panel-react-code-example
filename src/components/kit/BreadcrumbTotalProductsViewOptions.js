// @flow

import React from 'react';
import { Breadcrumb, Card, Col, Row, TotalProducts, ViewOptions } from "./";

type Props = {
  routes: Array,
  totalProducts: Number
}

export default function BreadcrumbTotalProductsViewOptions({ routes, totalProducts }: Props) {
  return (
    <Card hasShadow={false} type="whiteBackground" className="p-2 d-none d-sm-none d-md-flex h-100 justify-content-between">
      <Row>
        <Col xs="auto" className="d-flex align-items-center">
          <Breadcrumb routes={routes}/>
        </Col>
        {
          totalProducts ?
            <Col xs="auto">
              <TotalProducts totalProducts={totalProducts}/>
            </Col>
            : null
        }
      </Row>
      <div className="d-flex align-items-center">
        <ViewOptions/>
      </div>
    </Card>
  );
}
