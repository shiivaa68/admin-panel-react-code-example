// @flow

import React from 'react';
import { Accordion, Card, CheckBox, Text } from '../';
import { services } from '../../../utils';
import Chips from './Chips';

type Props = {
  data: Array,
  selected: Array,
  handleCheck: Function,
};

export default function CategoryList(props: Props) {
  const { data, selected, handleCheck } = props;

  return (
    <div>
      <Card
        hasShadow={false}
        hasRadius={false}
        type="secondary"
        className="px-2"
      >
        <Chips data={selected} onRemove={handleCheck} />
      </Card>
      <div className="px-3 overflow-auto">
        <Card
          hasShadow={false}
          hasRadius={false}
          height="450px"
          className="px-4"
        >
          {services.getParents(data).map(item => {
            const children = services.getChildren(data, item._id);
            return (
              <Accordion
                title={item.name}
                hasShadow={false}
                hasRadius={false}
                iconName="service"
                iconChildren={item.ic}
              >
                {children.map(child => {
                  const childChildren = services.getChildren(data, child._id);

                  if (childChildren.length) {
                    return (
                      <Accordion
                        title={child.name}
                        hasShadow={false}
                        hasRadius={false}
                        iconName="service"
                        iconChildren={child.ic}
                      >
                        {childChildren.map(childChild => (
                          <CheckBox
                            checked={
                              !!selected.find(
                                select => select._id === childChild._id
                              )
                            }
                            titleElement={<Text>{childChild.name}</Text>}
                            onClick={() => handleCheck(childChild)}
                            wrapperClassName="my-2"
                          />
                        ))}
                      </Accordion>
                    );
                  }
                  return (
                    <CheckBox
                      checked={
                        !!selected.find(select => select._id === child._id)
                      }
                      titleElement={<Text>{child.name}</Text>}
                      onClick={() => handleCheck(child)}
                      wrapperClassName="my-2"
                    />
                  );
                })}
              </Accordion>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
