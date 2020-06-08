import React from 'react';
import ContentLoader from 'react-content-loader';
import { colors } from "../../styleSheet";

export default function NewProductLoader() {
  return (
    <ContentLoader
      height={250}
      width={200}
      speed={2}
      primaryColor={colors.border}
      secondaryColor={colors.white}
    >
      <rect x="40" y="20" rx="15" ry="15" width="125" height="125"/>
      <rect x="18" y="154" rx="15" ry="15" width="165" height="15"/>
      <rect x="52" y="175" rx="10" ry="10" width="103" height="11"/>
      <rect x="82" y="193" rx="5" ry="5" width="42" height="6"/>
    </ContentLoader>
  )
}
