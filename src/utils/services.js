const getParents = data => data.filter(item => !item.parent);

const getChildren = (data, id) => data.filter(item => item.parent === id);

const postCategory = (services, splitor = ' . ') => {
  return services.reduce((total, service, index) => {
    total += service.name;
    if (index + 1 !== services.length) {
      total += splitor;
    }
    return total;
  }, '');
};

export default {
  getParents,
  getChildren,
  postCategory,
};
