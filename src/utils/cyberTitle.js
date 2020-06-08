import { i18n } from '../localization';

function getGenderTitle(gender, detector) {
  if (detector === 'fa') {
    if (Number(gender) === 2) {
      return "آقای";
    } else {
      return "خانم";
    }
  }

  if (detector === 'en') {
    if (Number(gender) === 2) {
      return "Mr. ";
    } else {
      return "Mrs. "
    }
  }
}


function getUserName(user, detector) {
  if (detector === 'fa') {
    return `${user.fname} ${user.lname}`;
  } else {
    return `${user.efname} ${user.elname}`;
  }
}


function getCyberTitle(title, user, detector) {
  const genderTitle = getGenderTitle(user.gender, detector);
  const pageTitle = i18n.t(title, detector);
  const userName = getUserName(user, detector);
  if (detector === 'en') {
    return `${genderTitle} ${userName} ${pageTitle}`;
  }
  return `${pageTitle} ${genderTitle} ${userName}`;
}

export default { getCyberTitle, getUserName, getGenderTitle };
