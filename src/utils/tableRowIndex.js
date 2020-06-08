export default function tableRowIndex(index, pageSize, page) {
  return (index + 1) + (pageSize * (page - 1));
};
