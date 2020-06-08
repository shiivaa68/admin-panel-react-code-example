import moment from 'moment-jalali';

export function getDay(date, language) {
  let format = 'D';
  if (language.detector === 'fa') format = 'jD';
  return moment(date).format(format);
}

export function getMonthName(date, language) {
  if (language.detector === 'fa') {
    moment.loadPersian();
    return moment(date).format('jMMMM');
  } else {
    return moment(date).locale('en').format('MMMM')
  }
}

export function formatDate(date, language, formater) {
  if (language.detector === 'fa') {
    moment.loadPersian();
    return moment(date).locale('fa').format(formater);
  } else {
    return moment(date).locale('en').format(formater);
  }
}
