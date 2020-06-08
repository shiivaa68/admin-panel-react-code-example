

export default function routerCommon(routes, history) {
  return !!routes.find(route => route.toLowerCase() === history.location.pathname.toLowerCase());
}
