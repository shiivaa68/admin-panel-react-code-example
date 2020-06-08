// @flow

import React from 'react';
import { Container, Row, Col, Text, Avatar, Accordion, Card, TitleValue } from '../../../components/kit';
import { exist } from "../../../utils";

type Props = {
  row: Array,
}

export default function CountBusiness(props: Props) {
  const { row } = props;

  return (
    <Container fluid className="p-2">
      <Row>
        {exist(row, 'original.businesses.length') ?
          row.original.businesses.map(business => {
            const title = (
              <Card>
                <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                  <TitleValue title="titleValue.name" value={business.name}/>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                  <TitleValue title="titleValue.description" value={business.description}/>
                </div>
              </Card>
            );

            return (
              <Col xs={12}>
                <Accordion title={title}>
                  {
                    business.media && business.media.length ? business.media.map(avatar => {
                        return (
                          <Card type="grayBackground" className="px-3 py-2 d-flex" hasShadow={false} hasBorder>
                            <Card width="100px" height="100px" className="overflow-hidden">
                              <Avatar hash={avatar.hash} full alt="test"/>
                            </Card>
                            <div className="d-flex flex-column px-4">
                              <TitleValue title="titleValue.name" value={business.name}/>
                              <TitleValue title="titleValue.description" value={business.description}/>
                            </div>
                          </Card>
                        )
                      }) :
                      <Text size="lg" color="secondary">panel.modal.noImage</Text>
                  }
                </Accordion>
              </Col>
            )
          }) :
          null
        }
      </Row>
    </Container>
  );
}

