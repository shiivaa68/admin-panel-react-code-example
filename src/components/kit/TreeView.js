// @flow

import React, { useState } from 'react';
import { Icon, Ul } from './';
import styled from 'styled-components';
import { colors } from '../../styleSheet'

const LiTree = styled.li`
  list-style-type: none;
  margin: 10px 10px 10px 0;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top:-10px;
    right: -10px;
    border-right: 1px solid ${colors.secondary};
    border-bottom:1px solid ${colors.secondary};
    width: 10px;
    height: 25px;
  }
  &:after {
    position:absolute;
    content:"";
    top:5px;
    right: -10px;
    border-right: 1px solid ${colors.secondary};
    width: 10px;
    height:100%;
  }
  &:last-child:after {display:none;}
  
`;

const DivTree = styled.div`
  display: block;
  border: 1px solid ${colors.gray};
  padding: 10px;
  color: ${colors.black};
  text-decoration: none;
  border-radius: 10px;
  &:hover,
  &:focus {
    background: ${colors.border}; 
    color: ${colors.white}; 
    border: 1px solid ${colors.border};
    & + ul {
      li {
        .DivTree {
          background: ${colors.lightGray}; 
          color: ${colors.white}; 
          border: 1px solid ${colors.border};
        }
      }
    }
  }

  &:hover + ul, 
  &:focus + ul {
    li {
      &:after,&:before {
        border-color: ${colors.failure};
      }
    }
  }
`;

const UlTree = styled(Ul)`
  margin-right: 10px;
`;

type Prop = {
  data: Object,
  RecAccessor: String,
  RowName: String,
  getUrl: Function
}

const RecLoop = (item, toggle, isOpen, RecAccessor, RowName, getUrl) => {
  return item.map((child, index) => {
    return <LiTree key={index}>
      <DivTree onClick={() => child[RecAccessor] ? toggle(index) : getUrl(child.url)} className="DivTree w-100">
        {child[RowName]}
        {child[RecAccessor] &&
        <Icon className="icon px-2" size={14} name={isOpen[index] ? "minimal-left" : "minimal-down"}/>
        }
      </DivTree>
      {child[RecAccessor] && isOpen[index] &&
      <UlTree>
        {
          RecLoop(child[RecAccessor], toggle, isOpen, RecAccessor, RowName, getUrl)
        }
      </UlTree>
      }
    </LiTree>
  })
};


const isOpenSelect = {};

const TreeView = (props: Prop) => {
  const { data, RecAccessor, RowName, getUrl } = props;
  const [isOpen, setOpen] = useState(false);

  const toggle = index => {
    setOpen(!isOpen);
    isOpenSelect[index] = isOpenSelect[index] !== 'undefined'
      ? !isOpenSelect[index]
      : !isOpen;
  };

  const calcData = (item, itemUrl, RecAccessor, RowName) => {
    item.forEach(items => {
      if(itemUrl){
        items['url'] = `${itemUrl}/${items[RowName]}`;
      }else{
        items['url'] = `${items[RowName]}`;
      }
      if(items[RecAccessor]){
        calcData(items[RecAccessor], items['url'], RecAccessor, RowName)
      }
    });
    return item;
  };

  // const getUrl = url => {
  //   console.log(url)
  // };

  const generatedData = calcData(data, undefined, RecAccessor, RowName);
  return (
    <UlTree className="p-4">
      {RecLoop(generatedData, toggle, isOpenSelect, RecAccessor, RowName, getUrl)}
    </UlTree>
  )
};

export default TreeView;
