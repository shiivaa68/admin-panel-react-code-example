function productLink(params, route) {
  return Object.values(params).reduce((link, value) => {
    if (value) {
      link += `/${value}`;
    }
    return link;
  }, route);
}

export default { productLink };
