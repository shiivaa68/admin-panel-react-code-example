import React from 'react';
import { StyledText } from '../kit';
import moment from "moment-jalali";

export default function DateTime(dateTime) {
  return <StyledText>{moment(dateTime).format('jYYYY/jMM/jDD h:mm:ss')}</StyledText>;
}
