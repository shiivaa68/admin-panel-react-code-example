import React from 'react';
import ContentLoader from "react-content-loader"
import { colors } from "../../styleSheet";
import styled from 'styled-components';

const Loader = styled(ContentLoader)`
  width: 100%;
  height: 60px;
`;

export default function FastReportLoader({ rtl = true }) {
  return (
    <div className="py-4">
      <Loader
        rtl={rtl}
        height="60px"
        width="100%"
        speed={2}
        primaryColor={colors.border}
        secondaryColor={colors.white}
      >
        <rect x="120" y="15" rx="4" ry="4" width="50%" height="12"/>
        <rect x="120" y="40" rx="3" ry="3" width="75%" height="7"/>
        <rect x="4" y="2" rx="15" ry="15" width="80" height="60"/>
      </Loader>
    </div>
  )
}
