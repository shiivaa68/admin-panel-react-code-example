const baseURL = process.env.REACT_APP_BASE_URL;

const productImage = img => `${baseURL}/image/_PRODUCT/${img}`;

const bankImage = img => `http://cdn.bizmlm.ir/download/APP/BANK/${img}`;

const avatarImage = (img, width, height) => `${baseURL}/image/_AVATAR/${img}/${width}/${height}`;

export {
  baseURL,
  bankImage,
  productImage,
  avatarImage
}
