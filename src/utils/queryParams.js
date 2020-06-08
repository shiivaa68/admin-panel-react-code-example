import queryString from 'query-string';
import history from "./history";

export function setNewQueryParams(newParams) {
  const params = {
    ...queryString.parse(history.location.search),
    ...newParams
  };
  return queryString.stringify(params);
}

export function getQueryParam(key, search = history.location.search) {
  const params = queryString.parse(search);

  if (key) {
    return params[key];
  } else {
    return params;
  }
}
