export default (items, slidesToShow) => {
  if (items.length && items.length <= slidesToShow) {
    let newItems = [];
    for (let i = items.length; i <= slidesToShow + 1; i++) {
      newItems = [...newItems, ...items];
    }
    return newItems;
  } else {
    return items;
  }
};
