import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Icon } from '../';

type Props = {
  routes: Array,
  lastItemBold?: Boolean,
  className?: String,
  itemClassName?: String
};

export default function Breadcrumb(props: Props) {
  const { routes, lastItemBold = true, className, itemClassName } = props;

  return (
    <div className={`d-flex align-items-center ${className}`}>
      {
        routes.map((route, index) => {
          const lastItem = index + 1 === routes.length;
          return (
            <div key={index} className={itemClassName}>
              <Link to={route.link} className="px-2">
                <Text size={lastItem && lastItemBold ? 'smb' : 'rg'}>{route.title}</Text>
              </Link>
              {lastItem ? null : <Icon name="minimal-left" size={10}/>}
            </div>
          );
        })
      }
    </div>
  );
}
