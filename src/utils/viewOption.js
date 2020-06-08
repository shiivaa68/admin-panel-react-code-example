import { getQueryParam } from "./queryParams";

export default function getViewOption() {
  return getQueryParam('view') || 'card';
}
